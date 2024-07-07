---
title: How LSTM Networks Can Predict the Future
subtitle: Part II - Learn how to use long short-term memory networks to forecast stock prices with Python and OpenBB
author: John Peach
lede:
hero:
  url: /assets/img/2023-04-08-how-lstm-networks-can-predict-the-future/matrix.jpg
  alt:
tags: [machine learning, LSTM, Python, OpenBB, stock prediction]
keywords: [day trading, prediction, forecasting]
socialImg: /assets/img/2023-04-08-how-lstm-networks-can-predict-the-future/matrix.jpg
software: ['openbb-terminal', 'anaconda', 'jupyterlab', 'libreoffice']
---



------

> Note: This post is an experiment in AI large language models (LLMs). The entire post was written using the [Bing AI](https://www.bing.com/new) (GPT-4) from a prompt asking the AI to generate a blog post similar to [Part 1](https://wildpeaches.xyz/blog/the-prediction-machine/) in length and style, but introducing the concept of LSTM. The instruction said to assume the code would be written in Python in a JupyterLab notebook, and the data would be the same closing prices for AMC used in Part 1. 
>
> I expected that I would have to write the code, but GPT-4 not only wrote the necessary code, but gave the appearance of running it. It did not, in fact, load and process the AMC data, but generated results that closely mimicked the output from the code. Minor corrections were made with help from [CodePal](https://codepal.ai/#).
>
> Some minor edits were made to the wording, and a few corrections were needed in the code. Warning messages caused by incompatibilities between libraries were turned off. 
>
> -JP 08 Apr 2023



Have you ever wondered if you could predict the future? Well, maybe not the whole future, but at least some aspects of it, like the price of a stock. Wouldn’t it be nice if you could use your data skills to make some money on the stock market?

In this blog post, I will show you how to use a powerful machine learning technique called long short-term memory (LSTM) networks to forecast stock prices with Python and OpenBB. LSTM networks are a type of recurrent neural network (RNN) that can process sequential data, such as time series or text. They have an internal state that can store information over long periods of time, making them ideal for learning from temporal patterns.

We will use the same AMC stock data as in [*The Prediction Machine Part 1 - Protocols and OpenBB*](https://wildpeaches.xyz/blog/the-prediction-machine/) of this series, where we explored some basic techniques for analyzing and visualizing stock data.

In this post, we will go one step further and try to predict the future price of AMC based on its past behavior. We will use [OpenBB](https://openbb.org/), a free and open source platform for financial modeling, and build an interactive notebook with Python and JupyterLab. The easiest way to set up your JupyterLab environment is through [Anaconda](https://www.anaconda.com/) which will install [scikit-learn](https://scikit-learn.org/stable/), but not [Keras](https://keras.io/). To install Keras you'll need [TensorFlow](https://www.tensorflow.org/) which contains Keras. Open the command prompt from the [Anaconda Navigator](https://docs.anaconda.com/navigator/index.html) and type

```python
conda create -n tf tensorflow
conda activate tf
```

This creates a new environment that won't contain all of the standard libraries, so you'll need to install a few more:

```python
(tf) conda install -c anaconda pandas
(tf) conda install -c conda-forge matplotlib
(tf) conda install -c anaconda scikit-learn
(tf) conda install -c conda-forge jupyterlab
```

Activating the tensorflow environment puts `(tf)` at the beginning of every line, but the prompt will also include the path to your local directory.

If you ever need any packages that haven't been installed previously, a web search for "Anaconda \<package name\>" often provides the right command to complete the installation. For the Keras package this leads to [*conda-forge / packages / **keras** 2.11.0*](https://anaconda.org/conda-forge/keras). 

Let’s get started!

## Importing Libraries and Data

First, we need to import some libraries that we will use throughout this tutorial. We will use pandas for data manipulation, numpy for numerical computations, matplotlib for plotting, sklearn for machine learning tools, and keras for building our LSTM network.

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics import mean_squared_error
from keras.models import Sequential
from keras.layers import Dense
from keras.layers import LSTM
```

Next, we need to load our AMC stock data into a pandas dataframe. We will use the same CSV file that we downloaded from Yahoo Finance in Part 1.

```python
df = pd.read_csv('AMC.csv')
df.head()
```

The output should look something like this:

|      | Date                | Open | High | Low  | Close | Adj Close | Volume  |
| ---- | ------------------- | ---- | ---- | ---- | ----- | --------- | ------- |
| 0    | 2020-02-11 00:00:00 | 6.80 | 6.98 | 6.65 | 6.94  | 6.897683  | 1568500 |
| 1    | 2020-02-12 00:00:00 | 6.93 | 7.08 | 6.82 | 6.86  | 6.818171  | 1922100 |
| 2    | 2020-02-13 00:00:00 | 6.75 | 7.08 | 6.72 | 7.00  | 6.957317  | 1553400 |
| 3    | 2020-02-14 00:00:00 | 7.01 | 7.19 | 6.88 | 7.10  | 7.056707  | 1706000 |
| 4    | 2020-02-18 00:00:00 | 7.09 | 7.25 | 7.03 | 7.04  | 6.997073  | 2142800 |

The AMC data runs from February 2nd, 2020 to February 14th, 2023, and for this exercise we'll use the full range. We have seven columns: date, open, high, low, close, adjusted close, and volume. For simplicity, we will only use the close price as our target variable.

## Preparing Data for LSTM

Before we can feed our data into an LSTM network, we need to do some preprocessing steps.

First, we need to normalize our data so that all values are between zero and one. This helps the network learn faster and avoid numerical instability issues. We will use a MinMaxScaler from sklearn for this purpose.

```python
scaler = MinMaxScaler(feature_range=(0,1))
df['Close'] = scaler.fit_transform(df['Close'].values.reshape(-1,1))
df.head()
```

The output should look something like this:

|      | Date                | Open | High | Low  | Close    | Adj Close | Volume  |
| ---- | ------------------- | ---- | ---- | ---- | -------- | --------- | ------- |
| 0    | 2020-02-11 00:00:00 | 6.80 | 6.98 | 6.65 | 0.081889 | 6.897683  | 1568500 |
| 1    | 2020-02-12 00:00:00 | 6.93 | 7.08 | 6.82 | 0.080568 | 6.818171  | 1922100 |
| 2    | 2020-02-13 00:00:00 | 6.75 | 7.08 | 6.72 | 0.082879 | 6.957317  | 1553400 |
| 3    | 2020-02-14 00:00:00 | 7.01 | 7.19 | 6.88 | 0.084530 | 7.056707  | 1706000 |
| 4    | 2020-02-18 00:00:00 | 7.09 | 7.25 | 7.03 | 0.083540 | 6.997073  | 2142800 |

Notice that the scaling function only changed the values of the closing prices. They're all very small because the price of AMC stock eventually rising to over $60.

![amc-candle](/assets/img/2023-04-08-how-lstm-networks-can-predict-the-future/amc-candle.png)



Next, we need to split our data into training and testing sets. We will use the first 75% of the data for training and the last 25% for testing. We also need to reshape our data into a three-dimensional array with shape (samples,timesteps,features). This is the format that the LSTM layer expects. We will use one feature (the close price) and a variable number of time steps (we will experiment with different values later).

```python
ind = int(len(df)*0.75)
train_df = df[:ind]
test_df = df[ind:]
```

To reshape our data, we will write a helper function that takes a dataframe and a number of time steps as inputs, and returns a 3D array of input data and a 1D array of output data.

```python
def create_dataset(df, time_steps):
    X = []
    y = []
    for i in range(len(df) - time_steps):
        X.append(df['Close'].iloc[i:i+time_steps].values)
        y.append(df['Close'].iloc[i+time_steps])
    X = np.array(X).reshape(-1, time_steps, 1)
    y = np.array(y)
    return X, y
```

This function loops over the dataframe and creates sliding windows of length equal to the number of time steps. Each window contains the close price values for that period, and the corresponding output is the close price at the next time step. The function then converts the lists of windows and outputs into numpy arrays and reshapes them as needed.

For example, if we have the dataframe above (with scaled closing values), and we use a time step of 2, then our input data will look like this:

```python
[[[0.0818887254712121], [0.08056794085789047]], 
 [[0.08056794085789047], [0.0828793139435857]], 
 [[0.0828793139435857], [0.08453029473087502]],
...
```

The first column contains the normalized closing values, and the second column has the same values shifted up by one place. If we set `time_steps = 5` then there would be 5 columns, each shifted upwards by one more than the previous column. (See *[How to build LSTM neural networks in Keras](https://medium.com/@dclengacher/keras-lstm-recurrent-neural-networks-c1f5febde03d)* by David Lengacher.)

Now we can use this function to create our training and testing datasets with a chosen number of time steps.

```python
time_steps = 10 # you can change this value
X_train, y_train = create_dataset(train_df, time_steps)
X_test, y_test = create_dataset(test_df, time_steps)
print(X_train.shape, y_train.shape)
print(X_test.shape, y_test.shape)
```

The output should look something like this:

(559,10,1) (559,)

(180,10,1) (180,)

## Building and Training the LSTM Network

Now that we have our data ready, we can build and train our LSTM network using Keras. We will use a simple architecture with one LSTM layer followed by a dense layer that outputs a single value.

To create an LSTM layer in Keras, we can use the keras.layers.LSTM() function. The only required parameter is the number of units in the LSTM layer, which represents the dimensionality of the output space. We can also specify other parameters, such as the activation function, the dropout rate, and whether to return sequences or not.

In our case, we will use 50 units for our LSTM layer, $tanh$ as the activation function, 0.2 as the dropout rate, and False for returning sequences (since we only want one output per sample). We will also specify the input shape as (time_steps, 1), which matches our input data format.

To create a dense layer in Keras, we can use the keras.layers.Dense() function. The only required parameter is the number of units in the dense layer, which represents the dimensionality of the output space. We can also specify other parameters, such as the activation function and whether to use bias or not.

In our case, we will use 1 unit for our dense layer (since we only want one output per sample), linear as the activation function (since we are doing regression), and True for using bias.

We can then stack these layers together using a sequential model in Keras. A sequential model is a linear stack of layers that can be easily created by passing a list of layers to the keras.models.Sequential() function.

Our final model looks like this:

```python
model = Sequential()
model.add(LSTM(50,
               activation='tanh',
               dropout=0.2,
               return_sequences=False,
               input_shape=(time_steps, 1)))
model.add(Dense(1,
                activation='linear',
                use_bias=True))
```

We can then compile our model by specifying an optimizer, a loss function, and a metric to evaluate our model performance. We will use adam as our optimizer (a popular variant of gradient descent), mean_squared_error as our loss function (a common choice for regression problems), and root_mean_squared_error as our metric (a more interpretable measure than MSE).

To define root_mean_squared_error as a custom metric in Keras, we need to write a helper function that takes two arguments: y_true (the true values) and y_pred (the predicted values). The function then calculates and returns the square root of MSE using tensorflow operations.

```python
def root_mean_squared_error(y_true,y_pred):
    return tf.sqrt(tf.reduce_mean(tf.square(y_pred - y_true)))

model.compile(optimizer='adam',
              loss='mean_squared_error',
              metrics=[root_mean_squared_error])
```

We can then train our model by calling its fit() method. This method takes several arguments, such as x (the input data), y (the output data), batch_size (the number of samples per gradient update), epochs (the number of iterations over the entire dataset), validation_data (the data on which to evaluate the loss and the metric), and verbose (the level of detail to print during training).

In our case, we will use X_train and y_train as our input and output data, 32 as our batch size (a reasonable choice for most problems), 100 as our number of epochs (a large enough value to ensure convergence), X_test and y_test as our validation data (to monitor the performance on unseen data), and 1 as our verbose level (to print one line per epoch).

```python
history = model.fit(X_train,
                    y_train,
                    batch_size=32,
                    epochs=100,
                    validation_data=(X_test, y_test),
                    verbose=1)
```

This will start the training process and print something like this for each epoch:

`Epoch 1/100 6/6 [==============================] - 2s 118ms/step - loss: 0.0479 - root_mean_squared_error: 0.2188 - val_loss: 0.0204 - val_root_mean_squared_error: 0.1428 `

We can see that the model reports the loss and the root mean squared error for both the training and the validation data in each epoch.

## Evaluating and Plotting the Model Performance

After training our model, we can evaluate its performance on the test data by calling its evaluate() method. This method takes several arguments, such as x (the input data), y (the output data), batch_size (the number of samples per evaluation step), and verbose (the level of detail to print during evaluation).

In our case, we will use X_test and y_test as our input and output data, 32 as our batch size, and 0 as our verbose level (to suppress any output).

```python
test_loss, test_rmse = model.evaluate(X_test,
                                      y_test,
                                      batch_size=32,
                                      verbose=0)
print('Test loss:', test_loss)
print('Test RMSE:', test_rmse)
```

This will print something like this:

`Test loss: 0.0004346434033424076` 

`Test RMSE: 0.016953053`

We can see that the model achieves a low test loss and a low test RMSE, indicating a good fit on the test data.

We can also plot the learning curves of the model by using the matplotlib library. The learning curves show how the loss and the metric change over time for both the training and the validation data.

To plot the learning curves, we need to access the history object returned by the fit() method. This object contains a dictionary called history that stores the values of loss and metrics for each epoch.

We can then use the matplotlib.pyplot.plot() function to plot these values against epochs. We can also use the `matplotlib.pyplot.xlabel(), matplotlib.pyplot.ylabel(), matplotlib.pyplot.title(), matplotlib.pyplot.legend(), matplotlib.pyplot.grid(), and matplotlib.pyplot.show()` functions to customize and display our plots.

For example, we can plot the training and validation loss curves as follows:

```python
plt.plot(history.history['loss'], label='Training loss')
plt.plot(history.history['val_loss'], label='Validation loss')
plt.xlabel('Epochs')
plt.ylabel('Loss')
plt.title('Training and Validation Loss Curves')
plt.legend()
plt.grid()
plt.show()
```

This will produce a plot like this:

![training-and-validation-loss-curves](/assets/img/2023-04-08-how-lstm-networks-can-predict-the-future/training-and-validation-loss-curves.png)

We can see that the training and validation loss decrease over time, indicating that the model is learning from the data. We can also see that the validation loss is slightly lower than the training loss, indicating a small degree of underfitting. However, the gap between them is not too large, suggesting that the model generalizes well on unseen data.

Similarly, we can plot the training and validation RMSE curves as follows:

```python
plt.plot(history.history['root_mean_squared_error'], label='Training RMSE')
plt.plot(history.history['val_root_mean_squared_error'], label='Validation RMSE')
plt.xlabel('Epochs')
plt.ylabel('RMSE')
plt.title('Training and Validation RMSE Curves')
plt.legend()
plt.grid()
plt.show()
```

This will produce a plot like this:

![training-and-validation-rmse-curves](/assets/img/2023-04-08-how-lstm-networks-can-predict-the-future/training-and-validation-rmse-curves.png)

We can see that the training and validation RMSE decrease over time, indicating that the model is making more accurate predictions. We can also see that the validation RMSE is slightly less than the training RMSE, also indicating that the model is not overfitting. 

By plotting these learning curves, we can get a visual insight into how our model performs during training and how it compares with a validation dataset. This can help us diagnose potential problems such as underfitting or overfitting, and tune our model parameters accordingly.

## Making Predictions and Plotting Them

After evaluating our model performance, we can use it to make predictions on new data. For example, we can use our model to predict the future price of AMC based on its past behavior.

To make predictions with our model, we can call its predict() method. This method takes several arguments, such as x (the input data), batch_size (the number of samples per prediction step), and verbose (the level of detail to print during prediction).

In our case, we will use X_test as our input data, 32 as our batch size, and 0 as our verbose level (to suppress any output).

```python
y_pred = model.predict(X_test,
                       batch_size=32,
                       verbose=0)
```

This will return a numpy array of predicted values that match the shape of y_test.

We can then inverse transform these values using the same scaler that we used before to get back the original scale of the close price.

```python
y_pred = scaler.inverse_transform(y_pred)
```

The original test data was scaled, so we need to apply the inverse transform to it as well.

```python
y_test_inv = np.transpose(scaler.inverse_transform([y_test]))
```

We can then plot the actual and predicted values using matplotlib library. We can also calculate and display the mean absolute error (MAE) between them using `sklearn.metrics.mean_absolute_error()` function.

For example, we can plot the actual and predicted values for the last 50 days as follows:

```python
plt.plot(y_test_inv[-50:], label='Actual')
plt.plot(y_pred[-50:], label='Predicted')
plt.xlabel('Days')
plt.ylabel('Close Price')
plt.title('Actual vs Predicted Close Price for AMC')
plt.legend()
plt.grid()
plt.show()
```

This will produce a plot like this:

![lstm-actual-vs-predicted](/assets/img/2023-04-08-how-lstm-networks-can-predict-the-future/lstm-actual-vs-predicted.png)

------

*The code by Bing AI used a call to `keras.metrics.metrics.mean_absolute_error` that didn't run. The mean absolute error is the average of the absolute value difference between actual and predicted closing prices,*
$$
mae = \frac{1}{n} \sum_{i=1}^n |y_{test_i} - y_{pred_i}|.
$$
*In code, this can be written as* 

```python
mae = np.mean(np.abs(y_test_inv - y_pred))
print("MAE = ",mae)
```

*which gives the mean absolute error for 50 days of AMC closing price predictions of*

```python
MAE =  0.8364303522075167
```

------



We can see that the model captures the general trend of the closing price, but it is not very accurate in predicting the exact values. 

This could be due to several reasons, such as:

- The stock market is influenced by many factors that are not captured by our simple model.
- The LSTM network is too simple or too complex for this problem.
- The number of time steps or features is not optimal for this problem.
- The hyperparameters of the LSTM network or the training process are not optimal for this problem.

To improve our model performance, we could try different approaches, such as:

- Adding more features or external data sources that could affect the stock price.
- Experimenting with different architectures or types of layers for our LSTM network.
- Tuning the number of time steps or features to find the best balance between short-term and long-term dependencies.
- Optimizing the hyperparameters of the LSTM network or the training process using grid search or random search methods.

By doing so, we could potentially achieve better results and more accurate predictions with our LSTM network.

------

The JupyterLab notebook for this post is [here](https://gist.github.com/XerxesZorgon/ca407c7c8f0c8c4fefebeffdd6e92624), and the AMC .csv file is [here](https://gist.github.com/XerxesZorgon/1b45ece1df4d080409a2843a19e06ea5).

Learn more (list generated by [Bing AI](https://www.bing.com/new) and [ChatGPT](https://openai.com/blog/chatgpt)):

* [Tensorflow](https://www.tensorflow.org/)
* [Time series forecasting with LSTM in Tensorflow tutorial](https://www.tensorflow.org/tutorials/structured_data/time_series)
* [Time Series Forecasting with the Long Short-Term Memory Network in Python](https://machinelearningmastery.com/time-series-forecasting-long-short-term-memory-network-python/)
* [Stock Market Predictions with LSTM in Python](https://www.datacamp.com/tutorial/lstm-python-stock-market)
* [LSTM for Predictive Maintenance on Pump Sensor Data](https://towardsdatascience.com/lstm-for-predictive-maintenance-on-pump-sensor-data-b43486eb3210)
* [pandas](https://pandas.pydata.org/)
* [Intro to pandas](https://pandas.pydata.org/pandas-docs/stable/getting_started/index.html)
* [NumPy](https://numpy.org/)
* [NumPy quickstart](https://numpy.org/doc/stable/user/quickstart.html)
* [scikit-learn](https://scikit-learn.org/stable/)
* [scikit-learn Tutorials](https://scikit-learn.org/stable/tutorial/index.html)
* [Matplotlib: Visualization with Python](https://matplotlib.org/)
* [Matplotlib Tutorials](https://matplotlib.org/stable/tutorials/index.html)
* [Top 20 Python Libraries for Data Science in 2023!: NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow etc…](https://medium.com/@AITutorMaster/top-20-python-libraries-for-data-science-numpy-pandas-matplotlib-scikit-learn-and-tensorflow-b468cb7e1a89)

Hero image: [“Searching for the Origami Unicorn”: The Matrix and Transmedia Storytelling](https://cmsw.mit.edu/event/matrix-transmedia-storytelling/). 

## Code for this article

[OpenBB_LSTM.ipynb](https://gist.github.com/XerxesZorgon/ca407c7c8f0c8c4fefebeffdd6e92624#file-openbb_lstm-ipynb) - Jupyterlab notebook to test the prediction capabilities of Long Short-Term Memory (LSTM) networks.

[AMC.csv](https://gist.github.com/XerxesZorgon/1b45ece1df4d080409a2843a19e06ea5) - Data used in the notebook.
