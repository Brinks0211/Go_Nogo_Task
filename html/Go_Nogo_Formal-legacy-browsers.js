/*********************** 
 * Go_Nogo_Formal Test *
 ***********************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'Go_Nogo_Formal';  // from the Builder filename that created this script
let expInfo = {'participant': '', '姓名拼音': '', '男1/女2': '', '入院1/出院2': ''};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(introduction1RoutineBegin());
flowScheduler.add(introduction1RoutineEachFrame());
flowScheduler.add(introduction1RoutineEnd());
flowScheduler.add(introduction4RoutineBegin());
flowScheduler.add(introduction4RoutineEachFrame());
flowScheduler.add(introduction4RoutineEnd());
flowScheduler.add(introduction2RoutineBegin());
flowScheduler.add(introduction2RoutineEachFrame());
flowScheduler.add(introduction2RoutineEnd());
const loop_light1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop_light1LoopBegin, loop_light1LoopScheduler);
flowScheduler.add(loop_light1LoopScheduler);
flowScheduler.add(loop_light1LoopEnd);
flowScheduler.add(introduction3RoutineBegin());
flowScheduler.add(introduction3RoutineEachFrame());
flowScheduler.add(introduction3RoutineEnd());
const loop_face1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop_face1LoopBegin, loop_face1LoopScheduler);
flowScheduler.add(loop_face1LoopScheduler);
flowScheduler.add(loop_face1LoopEnd);
flowScheduler.add(tip1RoutineBegin());
flowScheduler.add(tip1RoutineEachFrame());
flowScheduler.add(tip1RoutineEnd());
const loop_light2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop_light2LoopBegin, loop_light2LoopScheduler);
flowScheduler.add(loop_light2LoopScheduler);
flowScheduler.add(loop_light2LoopEnd);
flowScheduler.add(tip2RoutineBegin());
flowScheduler.add(tip2RoutineEachFrame());
flowScheduler.add(tip2RoutineEnd());
const loop_face2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop_face2LoopBegin, loop_face2LoopScheduler);
flowScheduler.add(loop_face2LoopScheduler);
flowScheduler.add(loop_face2LoopEnd);
flowScheduler.add(thanksRoutineBegin());
flowScheduler.add(thanksRoutineEachFrame());
flowScheduler.add(thanksRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var introduction1Clock;
var introduction_1;
var key_resp;
var introduction4Clock;
var introduction_4;
var key_resp_4;
var introduction2Clock;
var introduction_2;
var key_resp_2;
var lightClock;
var concentration;
var image;
var key_resp_light;
var introduction3Clock;
var introduction_3;
var key_resp_3;
var faceClock;
var concentration2;
var image_2;
var key_resp_face;
var tip1Clock;
var tip_1;
var key_resp_5;
var tip2Clock;
var tip_2;
var key_resp_7;
var thanksClock;
var text;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "introduction1"
  introduction1Clock = new util.Clock();
  introduction_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'introduction_1',
    text: '欢迎参加测试\n（正式部分）\n\n本测试分两种类型\n\n（继续，请按空格键）',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "introduction4"
  introduction4Clock = new util.Clock();
  introduction_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'introduction_4',
    text: '如果准备好了，请开始正式测试\n\n（继续，请按空格键）',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "introduction2"
  introduction2Clock = new util.Clock();
  introduction_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'introduction_2',
    text: '第一种类型\n\n测试开始时,屏幕中间会出现注视点“+”\n之后会出现不同类型的红绿灯图片\n\n如果为绿灯或者黄灯，请按下空格键\n如果为红灯，请不要按键\n\n（继续，请按空格键）',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "light"
  lightClock = new util.Clock();
  concentration = new visual.TextStim({
    win: psychoJS.window,
    name: 'concentration',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  key_resp_light = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "introduction3"
  introduction3Clock = new util.Clock();
  introduction_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'introduction_3',
    text: '第二种类型\n\n测试开始时,屏幕中间会出现注视点“+”\n之后会出现一个表情图片\n\n在每个表情图片出现时\n如果为快乐或者中性，请按下空格键\n如果为悲伤，请不要按键\n\n（继续，请按空格键）',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "face"
  faceClock = new util.Clock();
  concentration2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'concentration2',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.4, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  key_resp_face = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "tip1"
  tip1Clock = new util.Clock();
  tip_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'tip_1',
    text: '现在，测试第一种类型\n\n如果为绿灯或者黄灯，请按下空格键\n如果为红灯，请不要按键\n\n（继续，请按空格键）\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "light"
  lightClock = new util.Clock();
  concentration = new visual.TextStim({
    win: psychoJS.window,
    name: 'concentration',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  key_resp_light = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "tip2"
  tip2Clock = new util.Clock();
  tip_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'tip_2',
    text: '现在，测试第二种类型\n\n在每个表情图片出现时\n如果为快乐或者中性，请按下空格键\n如果为悲伤，请不要按键\n\n（继续，请按空格键）\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "face"
  faceClock = new util.Clock();
  concentration2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'concentration2',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.4, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  key_resp_face = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "thanks"
  thanksClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '测试结束，谢谢您的参与',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var _key_resp_allKeys;
var introduction1Components;
function introduction1RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'introduction1'-------
    t = 0;
    introduction1Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    introduction1Components = [];
    introduction1Components.push(introduction_1);
    introduction1Components.push(key_resp);
    
    introduction1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function introduction1RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'introduction1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = introduction1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *introduction_1* updates
    if (t >= 0.0 && introduction_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      introduction_1.tStart = t;  // (not accounting for frame time here)
      introduction_1.frameNStart = frameN;  // exact frame index
      
      introduction_1.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    introduction1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introduction1RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'introduction1'-------
    introduction1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "introduction1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_4_allKeys;
var introduction4Components;
function introduction4RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'introduction4'-------
    t = 0;
    introduction4Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    introduction4Components = [];
    introduction4Components.push(introduction_4);
    introduction4Components.push(key_resp_4);
    
    introduction4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function introduction4RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'introduction4'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = introduction4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *introduction_4* updates
    if (t >= 0.0 && introduction_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      introduction_4.tStart = t;  // (not accounting for frame time here)
      introduction_4.frameNStart = frameN;  // exact frame index
      
      introduction_4.setAutoDraw(true);
    }

    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    introduction4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introduction4RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'introduction4'-------
    introduction4Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "introduction4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var introduction2Components;
function introduction2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'introduction2'-------
    t = 0;
    introduction2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    introduction2Components = [];
    introduction2Components.push(introduction_2);
    introduction2Components.push(key_resp_2);
    
    introduction2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function introduction2RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'introduction2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = introduction2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *introduction_2* updates
    if (t >= 0.0 && introduction_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      introduction_2.tStart = t;  // (not accounting for frame time here)
      introduction_2.frameNStart = frameN;  // exact frame index
      
      introduction_2.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    introduction2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introduction2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'introduction2'-------
    introduction2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "introduction2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var loop_light1;
var currentLoop;
function loop_light1LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  loop_light1 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 12, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'documents/light.xlsx',
    seed: undefined, name: 'loop_light1'
  });
  psychoJS.experiment.addLoop(loop_light1); // add the loop to the experiment
  currentLoop = loop_light1;  // we're now the current loop

  // Schedule all the trials in the trialList:
  loop_light1.forEach(function() {
    const snapshot = loop_light1.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(lightRoutineBegin(snapshot));
    thisScheduler.add(lightRoutineEachFrame(snapshot));
    thisScheduler.add(lightRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function loop_light1LoopEnd() {
  psychoJS.experiment.removeLoop(loop_light1);

  return Scheduler.Event.NEXT;
}


var loop_face1;
function loop_face1LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  loop_face1 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 2, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'documents/face.xlsx',
    seed: undefined, name: 'loop_face1'
  });
  psychoJS.experiment.addLoop(loop_face1); // add the loop to the experiment
  currentLoop = loop_face1;  // we're now the current loop

  // Schedule all the trials in the trialList:
  loop_face1.forEach(function() {
    const snapshot = loop_face1.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(faceRoutineBegin(snapshot));
    thisScheduler.add(faceRoutineEachFrame(snapshot));
    thisScheduler.add(faceRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function loop_face1LoopEnd() {
  psychoJS.experiment.removeLoop(loop_face1);

  return Scheduler.Event.NEXT;
}


var loop_light2;
function loop_light2LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  loop_light2 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 12, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'documents/light.xlsx',
    seed: undefined, name: 'loop_light2'
  });
  psychoJS.experiment.addLoop(loop_light2); // add the loop to the experiment
  currentLoop = loop_light2;  // we're now the current loop

  // Schedule all the trials in the trialList:
  loop_light2.forEach(function() {
    const snapshot = loop_light2.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(lightRoutineBegin(snapshot));
    thisScheduler.add(lightRoutineEachFrame(snapshot));
    thisScheduler.add(lightRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function loop_light2LoopEnd() {
  psychoJS.experiment.removeLoop(loop_light2);

  return Scheduler.Event.NEXT;
}


var loop_face2;
function loop_face2LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  loop_face2 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 2, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'documents/face.xlsx',
    seed: undefined, name: 'loop_face2'
  });
  psychoJS.experiment.addLoop(loop_face2); // add the loop to the experiment
  currentLoop = loop_face2;  // we're now the current loop

  // Schedule all the trials in the trialList:
  loop_face2.forEach(function() {
    const snapshot = loop_face2.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(faceRoutineBegin(snapshot));
    thisScheduler.add(faceRoutineEachFrame(snapshot));
    thisScheduler.add(faceRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function loop_face2LoopEnd() {
  psychoJS.experiment.removeLoop(loop_face2);

  return Scheduler.Event.NEXT;
}


var _key_resp_light_allKeys;
var lightComponents;
function lightRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'light'-------
    t = 0;
    lightClock.reset(); // clock
    frameN = -1;
    routineTimer.add(2.400000);
    // update component parameters for each repeat
    image.setImage(path1);
    key_resp_light.keys = undefined;
    key_resp_light.rt = undefined;
    _key_resp_light_allKeys = [];
    // keep track of which components have finished
    lightComponents = [];
    lightComponents.push(concentration);
    lightComponents.push(image);
    lightComponents.push(key_resp_light);
    
    lightComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function lightRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'light'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = lightClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *concentration* updates
    if (t >= 0.0 && concentration.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      concentration.tStart = t;  // (not accounting for frame time here)
      concentration.frameNStart = frameN;  // exact frame index
      
      concentration.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (concentration.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      concentration.setAutoDraw(false);
    }
    
    // *image* updates
    if (t >= 0.4 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }

    frameRemains = 0.4 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image.setAutoDraw(false);
    }
    
    // *key_resp_light* updates
    if (t >= 0.4 && key_resp_light.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_light.tStart = t;  // (not accounting for frame time here)
      key_resp_light.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_light.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_light.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_light.clearEvents(); });
    }

    frameRemains = 0.4 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_light.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_light.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_light.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_light.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_light_allKeys = _key_resp_light_allKeys.concat(theseKeys);
      if (_key_resp_light_allKeys.length > 0) {
        key_resp_light.keys = _key_resp_light_allKeys[_key_resp_light_allKeys.length - 1].name;  // just the last key pressed
        key_resp_light.rt = _key_resp_light_allKeys[_key_resp_light_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_light.keys == path1_corr) {
            key_resp_light.corr = 1;
        } else {
            key_resp_light.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    lightComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function lightRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'light'-------
    lightComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_light.keys === undefined) {
      if (['None','none',undefined].includes(path1_corr)) {
         key_resp_light.corr = 1;  // correct non-response
      } else {
         key_resp_light.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_light.keys', key_resp_light.keys);
    psychoJS.experiment.addData('key_resp_light.corr', key_resp_light.corr);
    if (typeof key_resp_light.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_light.rt', key_resp_light.rt);
        routineTimer.reset();
        }
    
    key_resp_light.stop();
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_3_allKeys;
var introduction3Components;
function introduction3RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'introduction3'-------
    t = 0;
    introduction3Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    introduction3Components = [];
    introduction3Components.push(introduction_3);
    introduction3Components.push(key_resp_3);
    
    introduction3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function introduction3RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'introduction3'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = introduction3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *introduction_3* updates
    if (t >= 0.0 && introduction_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      introduction_3.tStart = t;  // (not accounting for frame time here)
      introduction_3.frameNStart = frameN;  // exact frame index
      
      introduction_3.setAutoDraw(true);
    }

    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    introduction3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introduction3RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'introduction3'-------
    introduction3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "introduction3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_face_allKeys;
var faceComponents;
function faceRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'face'-------
    t = 0;
    faceClock.reset(); // clock
    frameN = -1;
    routineTimer.add(2.400000);
    // update component parameters for each repeat
    image_2.setImage(path2);
    key_resp_face.keys = undefined;
    key_resp_face.rt = undefined;
    _key_resp_face_allKeys = [];
    // keep track of which components have finished
    faceComponents = [];
    faceComponents.push(concentration2);
    faceComponents.push(image_2);
    faceComponents.push(key_resp_face);
    
    faceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function faceRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'face'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = faceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *concentration2* updates
    if (t >= 0.0 && concentration2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      concentration2.tStart = t;  // (not accounting for frame time here)
      concentration2.frameNStart = frameN;  // exact frame index
      
      concentration2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (concentration2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      concentration2.setAutoDraw(false);
    }
    
    // *image_2* updates
    if (t >= 0.4 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }

    frameRemains = 0.4 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_2.setAutoDraw(false);
    }
    
    // *key_resp_face* updates
    if (t >= 0.4 && key_resp_face.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_face.tStart = t;  // (not accounting for frame time here)
      key_resp_face.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_face.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_face.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_face.clearEvents(); });
    }

    frameRemains = 0.4 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_face.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_face.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_face.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_face.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_face_allKeys = _key_resp_face_allKeys.concat(theseKeys);
      if (_key_resp_face_allKeys.length > 0) {
        key_resp_face.keys = _key_resp_face_allKeys[_key_resp_face_allKeys.length - 1].name;  // just the last key pressed
        key_resp_face.rt = _key_resp_face_allKeys[_key_resp_face_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_face.keys == path2_corr) {
            key_resp_face.corr = 1;
        } else {
            key_resp_face.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    faceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function faceRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'face'-------
    faceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_face.keys === undefined) {
      if (['None','none',undefined].includes(path2_corr)) {
         key_resp_face.corr = 1;  // correct non-response
      } else {
         key_resp_face.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_face.keys', key_resp_face.keys);
    psychoJS.experiment.addData('key_resp_face.corr', key_resp_face.corr);
    if (typeof key_resp_face.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_face.rt', key_resp_face.rt);
        routineTimer.reset();
        }
    
    key_resp_face.stop();
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_5_allKeys;
var tip1Components;
function tip1RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'tip1'-------
    t = 0;
    tip1Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    // keep track of which components have finished
    tip1Components = [];
    tip1Components.push(tip_1);
    tip1Components.push(key_resp_5);
    
    tip1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function tip1RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'tip1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = tip1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *tip_1* updates
    if (t >= 0.0 && tip_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tip_1.tStart = t;  // (not accounting for frame time here)
      tip_1.frameNStart = frameN;  // exact frame index
      
      tip_1.setAutoDraw(true);
    }

    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }

    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    tip1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function tip1RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'tip1'-------
    tip1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "tip1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_7_allKeys;
var tip2Components;
function tip2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'tip2'-------
    t = 0;
    tip2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    // keep track of which components have finished
    tip2Components = [];
    tip2Components.push(tip_2);
    tip2Components.push(key_resp_7);
    
    tip2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function tip2RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'tip2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = tip2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *tip_2* updates
    if (t >= 0.0 && tip_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tip_2.tStart = t;  // (not accounting for frame time here)
      tip_2.frameNStart = frameN;  // exact frame index
      
      tip_2.setAutoDraw(true);
    }

    
    // *key_resp_7* updates
    if (t >= 0.0 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
    }

    if (key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_7.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    tip2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function tip2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'tip2'-------
    tip2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "tip2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var thanksComponents;
function thanksRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'thanks'-------
    t = 0;
    thanksClock.reset(); // clock
    frameN = -1;
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    thanksComponents = [];
    thanksComponents.push(text);
    
    thanksComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function thanksRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'thanks'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = thanksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    thanksComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thanksRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'thanks'-------
    thanksComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
