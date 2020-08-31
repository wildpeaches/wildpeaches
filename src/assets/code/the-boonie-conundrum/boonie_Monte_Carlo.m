% Runs a Monte Carlo experiment of the Boonie simulation                                             
%                                              
%                                              
% Input(s)                                     
%   nMC: Number of Monte Carlo iterations                                           
%                                              
% Output(s)                                    
%   Days: Vector of days until Boonie gets caught                                           
%                                              
% Example:                                     
% Days = boonie_Monte_Carlo(1000);                                             
%                                              
% See also: boonieSim                                   
%                                              
%                                              
% Dependencies: pubFig                               
                                               
%                                              
%                                              
% Written by: John Peach 28-Aug-2020           
% Marakesh Sailing Analysis and Design         
%                                              
% Revisions:                                   
                                               
                                               
function Days = boonie_Monte_Carlo(nMC)
    
    % Initialize Days vector 
    Days = zeros(1,nMC);
    
    % Run the Monte Carlo experiments
    hdl = waitbar(0,'Boonie Monte Carlo');
    for k = 1:nMC
        % Run one instance
        Days(k) = boonieSim;
        % Update waitbar
        waitbar(k/nMC,hdl);
    endfor
    
    % Close the waitbar
    close(hdl);
    
    % Plot a histogram of the days
    figure;
    hist(Days,50);
    xlabel('Days');
    ylabel('Number of times');
    title('Monte Carlo Conspiracy Simulation')
    pubFig
    
    
endfunction
