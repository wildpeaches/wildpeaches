---
title: California Tumbles Into The Sea
subtitle: Disaster at Rat Creek
author: John Peach
lede: Arson, drugs, murder? (maybe) lead to $11.5M damage on CA Hwy 1. TV drone video and some math tricks calculate the volume of the washout.
hero:
  url: /assets/img/2021-03-09-california-tumbles-into-the-sea/coastal-convection-landscape.jpg
  alt: Photo from NOAA "What are atmospheric rivers".
tags: [math]
keywords: [structure from motion, volume estimation, drone video]
socialImg: /assets/img/2021-03-09-california-tumbles-into-the-sea/coastal-convection-landscape.jpg
ghDiscussion: 133
software: ['meshroom', 'regard3d', 'visualsfm', 'visualsize', 'google-earth', 'cloudcompare', 'meshlab', 'octave', 'grass-gis', 'webodm', 'qgis']
---

## Fire and Rain

When he was arrested, Ivan Gomez confessed to five murders and setting the fire to cover up evidence. Police booked him on ["charges of arson on forest land, cultivating marijuana, battery on a person, exhibiting a deadly weapon and throwing something at a vehicle intending to cause great bodily injury"](https://www.thecalifornian.com/story/news/2020/09/18/california-wildfires-dolan-fire-arson-murders-mental-health-evaluation/5825074002/), but they never found the bodies. His attorney presented evidence that he may not be mentally competent to stand trial, and while the police still believe the origins of the fire were suspicious, they haven't been able to pin an arson charge on him. Firefighters in the area accused him of throwing rocks at their vehicles.

The Dolan Fire on California's central coast near Big Sur began in the evening of August 18th, 2020, and wasn't fully contained until December 31st. Fifteen firefighters were [injured](https://www.ksby.com/weather/fire-watch/15-firefighters-injured-during-shelter-deployment-situation-while-battling-the-dolan-fire) battling the fire on September 8th, one of them critically, when they were forced to deploy fire shelters at [Nacimiento Station](https://naturalatlas.com/ranger-stations/nacimiento-1543344) in Los Padres National Forest. By the time the fire was fully contained it had burned 128,050 acres.

![dolan-on-sept8](/assets/img/2021-03-09-california-tumbles-into-the-sea/dolan-on-sept8.jpg)

<p align = "center"><b>The Dolan fire on Sept 8, 2020</b></p>

Winter rains of 2020 - 2021 have been only 30% to 70% of the typical totals meaning that groundwater supplies are low. ["Northern California remains stuck in one of the worst two-year rainfall deficits seen since the 1849 Gold Rush, increasing the risk of water restrictions and potentially setting up dangerous wildfire conditions next summer"](https://www.theguardian.com/us-news/2021/feb/11/california-dry-weather-drought-wildfire-agriculture), Katherine Gammon writes in The Guardian. Global warming has pushed the start of the fall rainy season back by a month over the past 60 years. The [USDA Drought Monitor map](https://droughtmonitor.unl.edu/CurrentMap/StateDroughtMonitor.aspx?CA) for California shows large areas of severe to exceptional drought throughout the state.

![](/assets/img/2021-03-09-california-tumbles-into-the-sea/california-drought-11feb2021.png){.blend-multiply}

<p align = "center"><b>California Drought Feb 11, 2021</b></p>

Despite persistent dry conditions, one region was about to experience devastating rains. Far out over the Pacific Ocean, an atmospheric river was forming, a "river" in the sky capable of carrying as much water as the Mississippi River. [Duane Waliser](https://yaleclimateconnections.org/2019/03/california-could-see-intense-rains-in-the-future/) of NASA’s Jet Propulsion Laboratory says that as the climate warms, atmospheric rivers will increase in intensity. The [NOAA page](https://www.noaa.gov/stories/what-are-atmospheric-rivers) on Atmospheric Rivers (ARs) describes them as mostly beneficial, but when they carry more moisture than normal or stall over a location, ARs can cause significant flooding. In her ["Ask Sara"](https://yaleclimateconnections.org/2020/02/how-is-climate-change-affecting-winter-in-my-region/) column for Yale Climate Connections, Sara Peach (my daughter) says, "Extreme rainfall from atmospheric rivers is expected to occur more often in the Northwest in the coming decades, and severe winter storms are expected more frequently along the coast."

![atmospheric-rivers](/assets/img/2021-03-09-california-tumbles-into-the-sea/atmospheric-rivers.jpg){.panel}

<p align = "center"><b>Atmospheric River Science</b></p>

F. Martin Ralph, director of the Center for Western Water and Weather Extremes (CW3E) at Scripps Institution of Oceanography at UCSD has developed a [severity scale](https://cw3e.ucsd.edu/cw3e-releases-new-scale-to-characterize-strength-and-impacts-of-atmospheric-rivers/) for ARs similar to the Safir-Simpson scale for hurricanes. AR Cat1 is weak and primarily beneficial in bringing needed water to snowpacks and other areas, while AR Cat5 is exceptionally hazardous. One example of an AR Cat5 occurred [Dec 29, 1996 - Jan 2, 1997,](https://www.cnrfc.noaa.gov/storm_summaries/jan1997storms.php) and caused a billion dollars in damage.

On January 27 2021 an [AR2](https://cw3e.ucsd.edu/cw3e-event-summary-26-29-january-2021/) made landfall over the central California coast, moved southward, and stalled near Big Sur. Over the next three days, Big Sur received 13.38 inches of rain, nearly 30% of the annual average. A woman in [Monterey County](https://www.cnn.com/2021/01/28/us/california-storm-damage/index.html) was injured as she attempted to escape a mudslide engulfing her house. Another 24 homes and outbuildings were damaged or destroyed in mudslides caused by the storm. Vegetation burned by the fire meant the ground couldn't absorb much moisture, or withstand the force of the atmospheric river.

A half-hour drive south of Big Sur on Cabrillo Hwy 1 at Rat Creek a torrent of water carrying the burnt remains of trees ripped across the highway washing away a 150-foot long section. California Highway Patrol Officer [John Yerace](https://edition.cnn.com/2021/01/30/us/big-sur-road-collapse-trnd/index.html) arrived at the scene around 4 PM and was able to stop traffic from entering the area until barricades could be erected.

![hwy1-washout-map-sf-chronicle](/assets/img/2021-03-09-california-tumbles-into-the-sea/hwy1-washout-map-sf-chronicle.jpg){.panel}

<p align = "center"><b>Hwy 1 Washout at Rat Creek</b></p>

The San Francisco Chronicle [published](https://www.sfchronicle.com/projects/2021/big-sur-closure/) a review of the events leading up to the washout of Hwy 1 at Rat Creek which included this photo.

![hwy1-washout-rat-creek-sf-chronicle](/assets/img/2021-03-09-california-tumbles-into-the-sea/hwy1-washout-rat-creek-sf-chronicle.jpg)

<p align = "center"><b>Rat Creek Drone Image</b></p>

How much of California tumbled into the sea at [Rat Creek?](https://blogs.agu.org/landslideblog/2021/02/01/rat-creek-1/) This is a question that [highway engineers](https://www.mercurynews.com/2021/02/11/caltrans-explains-repair-options-for-washout-of-highway-1-in-big-sur/) will have to answer as they decide the best approach to repairing the highway. In this case, building a [bridge across the chasm](https://www.mercurynews.com/2021/02/25/highway-1-in-big-sur-to-reopen-this-summer-after-11-5-million-slide-repair/) may be the best answer, but filling the hole is another possibility and knowing how much fill is required determines the estimated cost.

CalTrans public information officer [Kevin Dabrinski](https://www.mercurynews.com/2021/02/11/caltrans-explains-repair-options-for-washout-of-highway-1-in-big-sur/) said, “It put into perspective my question about, ‘Hey when are you guys going to get this done?’ Because you’re literally standing on a road and you’re looking back up a canyon and there’s marking on the trees about 20 feet up where the mud had risen,” he said. “One of our geotech teams said if we hadn’t had debris flow like if it wasn’t for the debris flow from the Dolan Fire (burn scar), it’s likely that the culvert would have operated as usual and we wouldn’t have had the loss of road.”

## Structure From Motion

Local news outlets arrived on the scene soon after the washout and flew drones over the area. Even though each video frame is a 2D representation, we can use the combined information from a sequence to reconstruct a 3D model of the washout. With the 3D model, it will be possible to estimate the total volume of the washed-out area.

Structure from motion is a technique of recreating three-dimensional point clouds from a sequence of flat images. The images must have considerable overlap frame-to-frame so that features identified in one frame may be found in subsequent frames. The [Scale-Invariant Feature Transform (SIFT)](https://docs.opencv.org/4.x/da/df5/tutorial_py_sift_intro.html) algorithm detects features, and the [RANSAC](http://homepages.inf.ed.ac.uk/rbf/CVonline/LOCAL_COPIES/FISHER/RANSAC/) (Random Sample Consensus) method is useful for rejecting non-matching points. Estimating [camera pose](https://cmsc426.github.io/sfm/) requires some fairly straightforward [linear algebra](https://www.cs.ubc.ca/~lowe/papers/ijcv04.pdf) calculated from the geometry of the locations of points detected in each frame.

![structure-from-motion](/assets/img/2021-03-09-california-tumbles-into-the-sea/structure-from-motion.png){.blend-multiply}

<p align = "center"><b>Structure from motion camera views</b></p>

San Francisco CBS station KPIX flew a drone over the area capturing [video](https://www.youtube.com/watch?v=WxuPIrbAx8Q) of the damaged highway. During the first 25 seconds, the drone focuses on the washout as the camera moves in a circular arc above the ocean. Beginning at about the 2:45 mark, the drone flies East to West down the valley of Rat Creek with the camera in a nadir pointing attitude. This continues until 3:07 when the drone is above the edge of the ocean and fragments of the highway can be seen in the surf.

This is a [clip](https://www.youtube.com/watch?v=59JcDmbI1hw) from a drone flown by [ABC7 San Francisco](https://abc7news.com/):

![abc7](/assets/img/2021-03-09-california-tumbles-into-the-sea/abc7.gif)

<p align = "center"><b>Drone Video of Rat Creek Washout</b></p>

And the view from the Structure from Motion (SfM) 3D reconstruction:

![reconstruction3D](/assets/img/2021-03-09-california-tumbles-into-the-sea/reconstruction3D.gif)

<p align = "center"><b>SfM Reconstruction</b></p>

The reconstruction (in [.ply format](<https://en.wikipedia.org/wiki/PLY_(file_format)>)) contains 3.3 million points. Each point is assigned a coordinate ($x,y,z$) and a color ($r,g,b$) forming a mesh of triangular patches created from [Delaunay triangulation](https://en.wikipedia.org/wiki/Delaunay_triangulation). The [video](https://www.youtube.com/watch?v=WxuPIrbAx8Q) used to make the reconstruction came from the [KPIX](https://sanfrancisco.cbslocal.com/) drone:

![drone-video-25sec](/assets/img/2021-03-09-california-tumbles-into-the-sea/drone-video-25sec.gif)

<p align = "center"><b>Drone Video used for SfM Reconstruction</b></p>

The volume lost directly under the roadway was about 120,000 cubic feet or 4500 cubic yards and a cross-section taken along the centerline of the road shows the maximum depth of the washout to be about 80 feet.

![](/assets/img/2021-03-09-california-tumbles-into-the-sea/road-section-measurements.png){.blend-multiply}

## Processing the Data

To estimate the volume we first need to get a copy of the drone video and then run it through a Structure from Motion (SfM) tool to get the 3D mesh. Download the [drone video](https://www.youtube.com/watch?v=WxuPIrbAx8Q) using a downloader app such as [youtube-dl](https://youtube-dl.org/), and crop the video using [Trim Video](https://online-video-cutter.com/) or [Online Converter](https://www.onlineconverter.com/video-to-jpg). Online Converter exports individual frames which are useful in a subsequent step. I found that the best results were obtained from the sequence 2:45 to 3:06. During this time the drone followed the path of Rat Creek across the road and towards the ocean with the camera pointing straight down.

Several SfM tools are available: [AliceVision/Meshroom](https://alicevision.org/#meshroom), [Regard3D](http://www.regard3d.org/index.php), [VisualSFM](http://ccwu.me/vsfm/), but I found that the online tool [VisualSize](http://www.visualsize.com/) worked very well. Submit your video clip to [PhotoModel3D](http://excelsior.cs.ucsb.edu/PhotoModel3D/webUpload.html), provide your email address, and in a couple of hours the completed 3D model is available for download in [.ply format](<https://en.wikipedia.org/wiki/PLY_(file_format)>), a standard ASCII structure that captures mesh vertex locations and colors. For a very nice 3D model, check out [Kathleen Tuite's](http://www.superfiretruck.com/) [Sketchfab reconstruction](https://sketchfab.com/3d-models/highway-1-washed-out-at-rat-creek-1e67868b52fc44219e29c32a4c327809).

Start [Google Earth](https://www.google.com/earth/versions/), type "Rat Creek, CA" in the search bar, and click "Search". Next, select a frame from the video that shows a clear view of the damaged roadway, click the "Image Overlay" icon, and import the frame. Set the transparency to about 50% and adjust the size and position of the overlay to match the location.

![google-earth-drone-img-overlay](/assets/img/2021-03-09-california-tumbles-into-the-sea/google-earth-drone-img-overlay.png)

<p align = "center"><b>Google Earth Image Overlay</b></p>

Using the ruler tool measure the length of the washout and the width of the road. I found the length to be about 148.58 feet and the road width was 21.37 feet. The length matches well with the CalTrans estimate of 150 feet.

Drone video uploaded to YouTube doesn't contain any location data, likely for privacy reasons. Phil Harvey wrote [ExifTool](https://exiftool.org/) to extract header information from video and drones usually include GPS and camera pointing data, but in this case, the data is missing. Aligning an image with Google Earth lets us estimate the scaling and orientation of the image sequence.

Use the mesh processing tool [CloudCompare](https://www.danielgm.net/cc/) to read the data in the .ply file.

![](/assets/img/2021-03-09-california-tumbles-into-the-sea/rat-creek-cloudcompare.jpg)

<p align = "center"><b>Washout Area in CloudCompare</b></p>

The first step is to take measurements in the 3D mesh and corresponding points in Google Earth. Use the [Point Picking](http://www.cloudcompare.org/doc/wiki/index.php?title=Point_picking) tool to select two points that are visible in both the data and Google Earth. The _2 Points Label_ in CloudCompare will display the distance between the points just as the _Ruler_ does in Google Earth. Taking the ratio of the distances, I found that the points in the mesh needed to be scaled up by a factor of 13.947.

Scale the points in the mesh by selecting Edit $\rightarrow$ [Multiply/Scale](http://www.cloudcompare.org/doc/wiki/index.php?title=Multiply/Scale) (make sure "Mesh" is highlighted in the DB Tree menu). In the dialog box, enter the scale factor found in the previous step. If you re-measure the points in the mesh they should match the distances in Google Earth. The scale factor could be improved by taking measurements between several pairs of points and averaging, but we're just trying to estimate the volume of some dirt here.

The SfM tool doesn't have any information about direction, so we need to provide a local reference system. We need to set an $x,y,z$ coordinate system, so I chose the $x$-axis to align with the edge of the road closest to the ocean, and the $z$-axis perpendicular to the road. To align the road with the CloudCompare coordinate system, the first step is to select one point to be the origin $(0,0,0)$. Pick a point on the white line close to the washout area such as point #1 shown here.

![](/assets/img/2021-03-09-california-tumbles-into-the-sea/vector-alignment.jpg)

<p align = "center"><b>Vector Alignment</b></p>

All points will be rotated around this point, so it needs to be close to the opening, but on the edge of the road. Click Edit $\rightarrow$ Apply Transformation $\rightarrow$ Axis, Angle in the dialog box. Make sure that Rotation axis and Rotation angle values are all set to zero, then enter the coordinates for the first point in Translation, check "Apply inverse transformation" and then OK.

![translation](/assets/img/2021-03-09-california-tumbles-into-the-sea/translation.png)

<p align = "center"><b>CloudCompare Translation</b></p>

Next, select two more points (2,3), and you should see something like this in the CloudCompare console.

```text
[12:23:42] [Picked] Point@Tri#5421914
[12:23:42] [Picked] - Tri#5421914 (-155.042770;77.017189;-59.749859)
[12:23:42] [Picked] - Color: (194;196;195;254)
[12:23:47] [Picked] Point@Tri#37730
[12:23:47] [Picked] - Tri#37730 (-33.501743;-5.217833;0.409614)
[12:23:47] [Picked] - Color: (233;231;234;255)
```

Open [Octave](https://www.gnu.org/software/octave/index) and load `rotationParams.m` into the editor. We can now align road points to the CloudCompare axis coordinates. In the Octave command prompt type,

```matlab
P2 = [-155.042770;77.017189;-59.749859];
P3 = [-33.501743;-5.217833;0.409614];
[omega,theta] = rotationParams(P2,P3,'z')
omega =

   0.9909
   0.1345
        0

theta = 31.589
```

Reset the translation values to zeros, and then under "Rotation axis" enter the values from _omega_: $X: 0.9909$ and $Y: 0.1345$. The rotation angle is _theta_ $= 31.589$ degrees (uncheck "Apply inverse transformation"). Click OK to align the $z$-axis with the local "up" direction. If you use the "Reset" button to clear the form, note that the _Z_ value for the rotation axis is set to 1, not 0. For mathematical details, see the section "Align points to an axis" below.

Once the $z$-axis is aligned with the local up direction, rotate the edge of the road to align with the $x$-axis. Use $P2$ as the first vector, the $x$-axis $[1,0,0]$ as $P3$. The dot product of $P2$ and $P3$ provide the rotation angle

```matlab
theta = acosd(dot(unit(P2),P3))
```

Reset the transformation parameters (Ctrl-t) $\rightarrow$ Reset and then enter the value calculated for _theta_ as the rotation angle. In this case, the $z$-value should be 1 because we need to rotate about the $z$-axis.

The mesh also needs to be rescaled. The most accurate points are on the white lines along the edge of the road, so pick a point like #3 shown above. The $x$ and $z$ coordinates don't matter, but the $y$ value might be something like 1.532193​. To get the scale factor, divide this into the true road width,

```matlab
21.37/1.532193
ans = 13.947
```

In CloudCompare select Tools $\rightarrow$ Multiply/Scale, enter the scale factor in Scale(x), and make sure that "Same scale for all dimensions" is checked, then click OK. The $y$-coordinates for points on the white line should now match the road width.

The structure from motion algorithm will miss some points that need to be filled, seen as dark patches. To fill in the missing points, [rasterize](http://www.cloudcompare.org/doc/wiki/index.php?title=Rasterize#Interpolating_empty_cells) the point cloud. Use a step size of 0.5, the projection direction _z_, and for empty cells set "Fill with" to "interpolate". Click "Update Grid" and then "Export Mesh". Highlight the new Vertices field in the DB tree and save it as a newly named file.

The last preprocessing step is to reduce the number of points in the 3D mesh. Import the mesh into [Meshlab](https://www.meshlab.net/), then click Filters $\rightarrow$ Remeshing, Simplification and Reconstruction $\rightarrow$ Delaunay Triangulation, then from the same menu choose Surface Reconstruction: Screened Poisson. This step can be repeated several times until the number of points in the mesh is about 100,000. Save the results as a .ply file. Details of the triangulation process are [here](https://meshlabstuff.blogspot.com/2009/09/meshing-point-clouds.html).

## Calculating the Volume of the Washout

The volume and cross-section functions were written in [Octave](https://www.gnu.org/software/octave/index), and saved to [GitHub](https://gist.github.com/XerxesZorgon/711c64f4fc230a8fa7b5af7bb847fcaf). Load the .ply file using the function `openMesh`. This will take a while even with a reduced mesh file. Next, we'll find points in the mesh contained within a rectangle containing the washed-out section of the road. Using CloudCompare, pick a point on the road near Point #2 where the road isn't damaged, and note the $x$-coordinate (about 180 feet). Set the values for `upper_right` to the length of the section (180 feet) and the known width of the roadway (22 feet).

In Octave, the function `triInMesh`:

```matlab
lower_left = [0;0];
upper_right = [180;22];
triInRect = triInMesh(mesh,lower_left,upper_right);
```

returns the indices of all mesh triangles with at least two vertices contained inside the rectangle. In this example, the orange triangle would be counted as inside the rectangle, but the yellow one is outside:

![](/assets/img/2021-03-09-california-tumbles-into-the-sea/tri-in-mesh.jpg)

<p align = "center"><b>Triangle Mesh</b></p>

Now the volume under the rectangle can be calculated by summing the volume of each truncated triangular prism:

![](/assets/img/2021-03-09-california-tumbles-into-the-sea/triangular-prism.png)

<p align = "center"><b>Triangular Prism Volume</b></p>

The volume is approximately the area $A$ of the triangle times the height. The height of each vertex $(h_1,h_2,h_3)$ may be different from the others, so an easy estimate is to take the median or middle value. We're just estimating some dirt here. To calculate the area of the triangle first create vectors

$$
V_{12} = P_2 - P_1 \\
V_{13} = P_3 - P_1
$$

and then the area is half the absolute value of the [cross product](https://en.wikipedia.org/wiki/Cross_product),

$$
A = \frac{1}{2} |V_{12} \times V_{13}|.
$$

In Octave, run the function

```matlab
meshVol = volUnderRect(mesh,[0;0],[180;22])
```

to get the volume of the washout under the road. Imagine that you're placing a rectangle over the damaged section of the road where the lower left coordinate is $(0,0)$ and the upper right is $(180,22)$, using a distance down the road of $180$ feet and the road width of $22$ feet. The function `volUnderRect` calls `triInRect` as a sub-function, so you don't need to directly find the triangles in the mesh contained within the rectangle.

![road-rectangle](/assets/img/2021-03-09-california-tumbles-into-the-sea/road-rectangle.jpg)

<p align = "center"><b>Road Surface Area</b></p>

You can plot a cross-section of the mesh between two points using the function `meshCrossSect`. The cross-section provides a handy way to check the volume estimate.

![](/assets/img/2021-03-09-california-tumbles-into-the-sea/volume-check.png){.blend-multiply}

In Octave,

```matlab
>> (119*78/2 + 53*15)*22
ans = 119592
```

which is pretty close to the volume estimated using the mesh of $120,330 \; ft^3$. The data on the right end is a bit ratty, which may indicate more damage or possibly the road slopes downwards there.

If you want to be useful to CalTrans, they might want an estimate that is slightly wider than the roadway and slopes down away from the shoulders:

![](/assets/img/2021-03-09-california-tumbles-into-the-sea/extended-volume.png)

<p align = "center"><b>Extended Volume</b></p>

Extending the width of the rectangle by 10 feet on either side to include the shoulders gives a volume of $224320 \; ft^3 = 8308 \; yd^3$. If the sloped region is extended 20 feet on either side of the end of the shoulder the volumes are $V_{left} = 148,250 \; ft^3 = 5491 \; yd^3$ and $V_{right} = 79,208 \; ft^3 = 2934 \; yd^3$ giving a total fill volume of $V_{total} = 451,780 \; ft^3 = 16730 \; yd^3$.

This shows that with some open-source software and freely available drone videos it's possible to reconstruct a 3D model of a scene and to perform volumetric calculations. Not only is it relatively fast, but using this technique keeps survey crews at a safe distance from the opening of the washout.

## Appendix A: Using Your Drone

If you own a drone calculations such as these may be easier since GPS data is captured with each frame. First, check that your image data contains GPS using the [ExifTool](https://exiftool.org/). The blog [trek view](https://www.trekview.org/) provides more details on [metadata, EXIF, and XMP](https://www.trekview.org/blog/2020/metadata-exif-xmp-360-photo-files/). [Isaac Ullah](https://anthropology.sdsu.edu/people/ullah) teaches anthropology at San Diego State University and has posted YouTube videos on constructing [3D point clouds from drone imagery](https://www.youtube.com/watch?v=0zVtZxWyBsw) using [WebODM](https://www.opendronemap.org/), [Meshlab](https://www.meshlab.net/), and [Grass 7.4](https://grass.osgeo.org/), and [Basic 3d point cloud analysis in Meshlab, QGIS, and GRASS](https://www.youtube.com/watch?v=X2qsaLWpx3E). [OpenDroneMap (ODM)](https://www.opendronemap.org/odm/) is an "open-source toolkit for processing aerial imagery", able to convert georeferenced imagery into 3D point cloud models. [QGIS](https://www.qgis.org/en/site/) is an open-source geographic information system (GIS) that integrates other GIS packages including GRASS (Geographic Resources Analysis Support System).

[Peter Falkingham](https://peterfalkingham.com/2020/07/10/free-and-commercial-photogrammetry-software-review-2020/#more-2853) recently reviewed SfM generation paths

![photogrammetry-software-review](/assets/img/2021-03-09-california-tumbles-into-the-sea/photogrammetry-software-review.jpg)

<p align = "center"><b>Photogrammetry Software Pathways</b></p>

suggesting that OpenDroneMap, AliceVision, and VIsualSFM might be good alternatives to VIsualSize, although VisualSize has the advantage of being entirely online, so no software download is required.

[LiDAR](https://en.wikipedia.org/wiki/Lidar) may also be used on [drones](https://www.dronezon.com/learn-about-drones-quadcopters/best-lidar-sensors-for-drones-great-uses-for-lidar-sensors/) to create elevation point clouds. LiDAR measures distances from the drone to points on the ground by [timing a laser pulse](https://youtu.be/H2-Yp30TGk4) transmitted from the drone as the pulse reflects from a point and returns to the sensor. LiDAR only measures distances, so point colors are not available as they are in photogrammetry, but combining LiDAR with data from a camera can restore some sense of color, as [Aleks Buczkowski](https://geoawesomeness.com/author/geoa0578/) explains in his article, ["Drone LiDAR or Photogrammetry? Everything you need to know."](http://geoawesomeness.com/drone-lidar-or-photogrammetry-everything-your-need-to-know/) Other useful introductory articles are, ["Drone photogrammetry vs. LIDAR: what sensor to choose for a given application"](https://wingtra.com/drone-photogrammetry-vs-lidar/) and ["Should you Choose LiDAR or Photogrammetry for Aerial Drone Surveys?"](https://www.commercialuavnews.com/construction/choose-lidar-photogrammetry-aerial-drone-surveys).

## Appendix B: Align Points to an Axis

The point cloud needs to be rotated to get the direction vertical to the road aligned with the $z$-axis first, then the $x$-axis. As explained above, the first step is to shift all of the points so that the origin is located at a point near the edge of the road just before the washout. Do this by using the translation option and applying an inverse transform equal to the values of this point.

Select two other points, and convert them to unit vectors. A vector is a triplet of numbers describing the direction from one point to another in $(x,y,z)$-coordinates. A unit vector has length $1$, meaning that if $V = [x,y,z]$ then the length of $V$ is $||V|| = \sqrt{x^2+y^2+z^2} = 1$.

The Octave function _norm_ calculates the length of a vector, so dividing by the norm gives a vector of length $1$, or unit vector. Using these new unit vectors we need to calculate the [cross](https://mathworld.wolfram.com/CrossProduct.html) and [dot products](https://mathworld.wolfram.com/DotProduct.html). The cross product gives a vector perpendicular to the first two, and the dot product is used to calculate the angle between two vectors.

![](/assets/img/2021-03-09-california-tumbles-into-the-sea/cross-dot-product.png)

The cross product of $V_1$ and $V_2$ gives $V_3$ which we need to align with the local up direction, or $z$-axis. Taking the cross product of $V_3$ with the $z$-axis $([0,0,1])$ gives a vector perpendicular to both, $\omega$, which is the axis of rotation required to transform all points so that the road becomes horizontal. CloudCompare uses a [Rodrigues rotation](https://en.wikipedia.org/wiki/Rodrigues%27_rotation_formula) to rotate points about the origin using information contained in the rotation vector $\omega$ and the rotation angle $\theta$.

![](/assets/img/2021-03-09-california-tumbles-into-the-sea/omega-theta.png)

<p align = "center"><b>Rodrigues Rotation</b></p>

After the roadway plane has been aligned with the $x-y$ plane, the edge of the road can be rotated into alignment with the $x$-axis by calculating the angle between them, using the dot product. Pick a point on the white line across the damaged area, but on the same side as the origin, and convert it to a unit vector. The dot product of two vectors is

$$
V = V_1 \cdot V_2 = V_{1x}V_{2x} + V_{1y}V_{2y} + V_{1z}V_{2z}
$$

or the sum of the products of each component of the two vectors. The $x$-axis is the unit vector $[1,0,0]$, so the dot product of any unit vector with the $x$-axis is just the first component of the vector. This means that the angle of rotation required to align to the $x$-axis is

$$
\theta = \cos^{-1}(V_{2x}).
$$

CloudCompare requires the angle to be in degrees, so either multiply by $\frac{180}{\pi}$ or use the Octave function `acosd`.

------

#### Image credits

Hero: [Atmospheric river over California](https://www.noaa.gov/stories/what-are-atmospheric-rivers), NOAA, Updated March 31, 2023

The Dolan fire on Sept 8, 2020: Wikipedia, [Dolan Fire](https://en.wikipedia.org/wiki/Dolan_Fire)

California Drought Feb 11, 2021, [U.S. Drought Monitor](https://droughtmonitor.unl.edu/CurrentMap.aspx)

Atmospheric River Science: [NOAA](https://www.noaa.gov/stories/what-are-atmospheric-rivers), Updated March 31, 2023

Hwy 1 Washout at Rat Creek: San Francisco Chronicle, Jan. 28, 2021 [Stretch of Highway 1 in Monterey County washes away after being hit by debris flow](https://www.sfchronicle.com/bayarea/article/Stretch-of-Highway-1-in-Monterey-County-washes-15907151.php)

Rat Creek Drone Image: San Francisco Chronicle, Jan. 29, 2021 [Map: See the part of Highway 1 near Big Sur that fell into the ocean](https://www.sfchronicle.com/projects/2021/big-sur-closure/)

Drone Video of Rat Creek Washout: ABC 7 News Bay Area, [Drone video shows aftermath of massive landslide on Hwy. 1 near Big Sur](https://www.youtube.com/watch?v=59JcDmbI1hw)

Drone Video used for SfM Reconstruction: KPIX CBS News Bay Area, [RAW: Drone Video Shows Extent Of Washout Damage To State Highway 1](https://www.youtube.com/watch?v=WxuPIrbAx8Q)

Google Earth Image Overlay: [Google Earth](https://earth.google.com/web/search/Rat+Creek,+CA/@36.09253403,-121.61875598,66.5999771a,454.01278263d,35y,0h,0t,0r/data=CigiJgokCf26pwPJgTRAEfy6pwPJgTTAGSNWH5WydS5AIXJdDOSju1XAOgMKATA)

CloudCompare Screenshots: [CloudCompare](https://www.danielgm.net/cc/) 3D point cloud and mesh processing software Open Source Project

## Code for this article

[meshFunctions.m](https://gist.github.com/XerxesZorgon/711c64f4fc230a8fa7b5af7bb847fcaf) - Octave code to estimate volume from point meshes: `openMesh`, `plyread`, `rotationParams`, `triInMesh`, `knnsearch`, `meshCrossSect`, `volUnderRect`, `volUnderSlope`, `unit`, `vnorm`, `pubFig`.	
