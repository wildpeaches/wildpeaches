% Simulates the Boonie Conundrum                                    
%                                     
%                                     
% Input(s)                            
%   DispOn: Displays the graph of student and teacher rumor knowledge
%   Modify simulation parameters in the code below                                 
%                                     
% Output(s)                           
%   studentFraction: Fraction of student population that knows the rumor 
%   teacherFraction: Fraction of teacher population that knows the rumor
%               Day: Day that Principal S. finally hears                                  
%                                     
% Example:                            
% boonieSim(true);                                    
%                                     
% See also:                           
%                                     
%                                     
% Dependencies: pubFig                     
                                      
%                                     
%                                     
% Written by: John Peach 17-Aug-2020  
% Marakesh Sailing Analysis and Design
%                                     
% Revisions:                          
                                      
                                      
function [studentFraction,teacherFraction,Day] = boonieSim(DispOn)
    if ~nargin
        DispOn = false;
    endif
    
    % Parameters
    nStudents           = 1500;    % Number of students
    nTeachers           = 100;     % Number of teachers
    studentFriendship   = 0.005;   % Probability that a student knows another
    studentOpportunity  = 0.01;    % Probability that rumor is passed between students 
    studentTeacherOpp   = 0.001;   % Probability that the student has a chance to tell and is willing
    teacherFriendship   = 0.05;    % Probability that a teacher knows another
    teacherOpportunity  = 0.001;   % Probability that rumor is passed between teachers 
    teacherPrincipalOpp = 0.01;    % Probability that a teacher will tell Principal S.

    % Student friendship matrix
    S = sprand(nStudents, nStudents, studentFriendship) > 0;
    S2S_friendship = S + S' + speye(nStudents);
    
    % Teacher friendship matrix
    T = sprand(nTeachers, nTeachers, teacherFriendship) > 0;
    T2T_friendship = T + T' + speye(nTeachers); 
    
    % Initialize rumor knowledge vectors
    studentKnows    = false(nStudents,1);
    studentKnows(1) = true;                % Only Boonie knows initially
    teacherKnows    = false(nTeachers,1);
    PrincipalKnows  = false;
    
    % Fractional knowledge vectors
    studentFraction = zeros(1,100);
    teacherFraction = zeros(1,100);
    
    % Update rumor mill daily
    Day = 0;
    while not(PrincipalKnows)
        % Students talk to each other during the day (opportunity matrix)
        studentsTalk = sprand(nStudents, nStudents, studentOpportunity) > 0;
        
        % Update student rumor knowledge vector
        studentKnows = studentKnows | ...
                       (S2S_friendship .* studentsTalk) * studentKnows > 0;
        
        % Information transmitted from students to teachers (opportunity)
        studentsTalkToTeachers = sprand(nTeachers, nStudents, studentTeacherOpp) > 0;
        teacherKnows = teacherKnows | ...
                       ((studentsTalkToTeachers * studentKnows) > 0);
        
        % Teachers talk among themselves
        teachersTalk = sprand(nTeachers, nTeachers, teacherOpportunity) > 0;
        teacherKnows = teacherKnows | ...
                       (T2T_friendship .* teachersTalk) * teacherKnows > 0;
        
        % Teachers pass on rumor to the principal
        T2P_crossover = rand(nTeachers,1) < teacherPrincipalOpp;
        PrincipalKnows = any(teacherKnows & T2P_crossover);
        
        % Update day counter
        Day = Day + 1;
        
        % Fraction of each population that knows the rumor
        studentFraction(Day) = sum(studentKnows) / nStudents;
        teacherFraction(Day) = sum(teacherKnows) / nTeachers;
        
    endwhile
    
    % Reduce student and teacher fraction vectors to length of number of days
    studentFraction = studentFraction(1:Day);
    teacherFraction = teacherFraction(1:Day);

    % Plot fraction of students and teachers who have heard the rumor
    if DispOn
        figure;
        plot(1:Day, 100*[studentFraction; teacherFraction]);
        xlabel('Days')
        ylabel('Rumor spread (%)')
        legend({'Students','Teachers'},'Location','northwest')
        title('The Boonie Rumor')
        pubFig
    endif

endfunction

%------------------------------------------------------------------------------

% Modifies figures to get ready for publication                                    
%                                     
%                                     
% Input(s)                            
%   None                                  
%                                     
% Output(s)                           
%   Current figure revised, suitable for publication                                  
%                                     
% Example:                            
% t = linspace(0,2*pi);
% y = sin(t);
% figure; 
% plot(t,y);
% xlabel('Time')
% ylabel('sin(t)')
% title('Sine function')
% pubFig                                    
%                                     
% See also:                           
%                                     
%                                     
% Dependencies: None                      
                                      
%                                     
%                                     
% Written by: John Peach 20-Aug-2020  
% Marakesh Sailing Analysis and Design
%                                     
% Revisions:                          
                                      
                                      
function pubFig  
    % Set standard units
    figUnits=get(gcf,'Units');
    set(gcf,'Units','inches');
    
    % Linewidth, fonts, figure dimensions
    linewidth = 1.5;
    axisFont  = 16; %12;
    labelFont = 20; %14;
    titleFont = 24; %16;
    fontName  = 'Arial';
    figPos    = get(gcf,'Position');
    
    % Modify text
    texts = findall(gcf,'Type','text');
    for k = 1:numel(texts)
        textParent = get(texts(k),'Parent');
        if ~strcmp(get(textParent,'Tag'),'legend')
            set(texts(k), ...
                'FontSize',labelFont, ...
                'FontWeight','bold',...
                'FontName',fontName);
        endif
    endfor
   
    % Set line widths
    figLines = findall(gcf,'Type','line');
    for k = 1:numel(figLines)
        set(figLines(k),'LineWidth',linewidth);
    endfor
    
    % Adjust axes
    figAxes = findall(gcf,'Type','axes');
    for k = 1:numel(figAxes)
        set(figAxes(k), ...
            'LineWidth',linewidth, ...
            'Fontsize',axisFont,...
            'FontWeight','bold', ...
            'FontName',fontName);
    endfor
    
    % Correct figure size
    currPos = get(gcf,'Position');
    newPos  = [currPos(1:2) - (figPos(3:4) - currPos(3:4)) figPos(3:4)];
    set(gcf,'Position',newPos)
    set(gcf,'PaperPosition',[1 1 figPos(3:4)])
    set(gcf,'Units',figUnits)
    
endfunction
