$(document).ready(function() {
var fizzyText = function() {
    //setting props
    this.content = '';
    this.effect = 'ChannelSplit';
    this.family= 'Impact';
    this.size= 0;
    this.fill= '#000';
    this.paddingLeft= 0;
    this.paddingRight= 0;
    this.paddingTop= 0;
    this.paddingBottom= 0;
  // Effect propertys Channel
    this.uOffset = 2;
    this.uRotation = 2;
    this.uApplyBlur = 0;
    this.uAnimateNoise = 1;
  };



  var text;
  var property = {};
    var props = new fizzyText();
    var gui = new dat.GUI();
    gui.remember(fizzyText);
    gui.add(props, 'content').onChange( function() {

        if(props.effect == 'Flies'){
            setTimeout(() => createFlies(), 1000)
        }else if(props.effect == 'ChannelSplit'){
            setTimeout(() => createChannelSplit(), 1000)
        }else if(props.effect == 'Liquid'){
            setTimeout(() => createLiquid(), 1000)
        }else if(props.effect == 'Rolling'){
            setTimeout(() => createRolling(), 1000)
        }else if(props.effect == 'Sliding'){
            setTimeout(() => createSliding(), 1000)
        } 
       
    }

    );
    gui.add(props, 'size', 100, 300).onChange(function(){
        Object.defineProperties(property, {
            size: { value:props.size}
        })
        if(props.effect == 'Flies'){
            setTimeout(() => createFlies(), 1000)
        }else if(props.effect == 'ChannelSplit'){
            setTimeout(() => createChannelSplit(), 1000)
        }else if(props.effect == 'Liquid'){
            setTimeout(() => createLiquid(), 1000)
        }else if(props.effect == 'Rolling'){
            setTimeout(() => createRolling(), 1000)
        }else if(props.effect == 'Sliding'){
            setTimeout(() => createSliding(), 1000)
        }  
      
    })
    gui.add(props, 'effect', [ 'ChannelSplit', 'Flies', 'Liquid', 'Rolling', 'Sliding' ] ).onChange(function(){
        if(props.effect == 'Flies'){
            setTimeout(() => createFlies(), 1000)
        }else if(props.effect == 'ChannelSplit'){
            setTimeout(() => createChannelSplit(), 1000)
        }else if(props.effect == 'Liquid'){
            setTimeout(() => createLiquid(), 1000)
        }else if(props.effect == 'Rolling'){
            setTimeout(() => createRolling(), 1000)
        }else if(props.effect == 'Sliding'){
            setTimeout(() => createSliding(), 1000)
        }
    }

    );

    gui.add(props, 'family', [ 'Impact','Charcoal','sans-serif' ]).onChange( function () {
        Object.defineProperties(property, {
            family: { value:props.family}
        })
        if(props.effect == 'Flies'){
            setTimeout(() => createFlies(), 1000)
        }else if(props.effect == 'ChannelSplit'){
            setTimeout(() => createChannelSplit(), 1000)
        }else if(props.effect == 'Liquid'){
            setTimeout(() => createLiquid(), 1000)
        }else if(props.effect == 'Rolling'){
            setTimeout(() => createRolling(), 1000)
        }else if(props.effect == 'Sliding'){
            setTimeout(() => createSliding(), 1000)
        }
    });
    gui.addColor(props, 'fill').onChange(function() {
        Object.defineProperties(property, {
            fill: { value:props.fill}
        })
        if(props.effect == 'Flies'){
            setTimeout(() => createFlies(), 1000)
        }else if(props.effect == 'ChannelSplit'){
            setTimeout(() => createChannelSplit(), 1000)
        }else if(props.effect == 'Liquid'){
            setTimeout(() => createLiquid(), 1000)
        }else if(props.effect == 'Rolling'){
            setTimeout(() => createRolling(), 1000)
        }else if(props.effect == 'Sliding'){
            setTimeout(() => createSliding(), 1000)
        } 
    });
    gui.add(props, 'paddingLeft', 80, 180).onChange(function() {
        Object.defineProperties(property, {
            paddingLeft: { value:props.paddingLeft}
        })
        if(props.effect == 'Flies'){
            setTimeout(() => createFlies(), 1000)
        }else if(props.effect == 'ChannelSplit'){
            setTimeout(() => createChannelSplit(), 1000)
        }else if(props.effect == 'Liquid'){
            setTimeout(() => createLiquid(), 1000)
        }else if(props.effect == 'Rolling'){
            setTimeout(() => createRolling(), 1000)
        }else if(props.effect == 'Sliding'){
            setTimeout(() => createSliding(), 1000)
        }
    });
    gui.add(props, 'paddingRight', 80, 180).onChange(function() {
        Object.defineProperties(property, {
            paddingRight: { value:props.paddingRight}
        })
        if(props.effect == 'Flies'){
            setTimeout(() => createFlies(), 1000)
        }else if(props.effect == 'ChannelSplit'){
            setTimeout(() => createChannelSplit(), 1000)
        }else if(props.effect == 'Liquid'){
            setTimeout(() => createLiquid(), 1000)
        }else if(props.effect == 'Rolling'){
            setTimeout(() => createRolling(), 1000)
        }else if(props.effect == 'Sliding'){
            setTimeout(() => createSliding(), 1000)
        }
    })
    gui.add(props, 'paddingTop', 80, 180).onChange(function() {
        Object.defineProperties(property, {
            paddingTop: { value:props.paddingTop}
        })
        if(props.effect == 'Flies'){
            setTimeout(() => createFlies(), 1000)
        }else if(props.effect == 'ChannelSplit'){
            setTimeout(() => createChannelSplit(), 1000)
        }else if(props.effect == 'Liquid'){
            setTimeout(() => createLiquid(), 1000)
        }else if(props.effect == 'Rolling'){
            setTimeout(() => createRolling(), 1000)
        }else if(props.effect == 'Sliding'){
            setTimeout(() => createSliding(), 1000)
        }
    })
    gui.add(props, 'paddingBottom', 80, 180).onChange(function() {
        Object.defineProperties(property, {
            paddingBottom: { value:props.paddingBottom}
        })
        if(props.effect == 'Flies'){
            setTimeout(() => createFlies(), 1000)
        }else if(props.effect == 'ChannelSplit'){
            setTimeout(() => createChannelSplit(), 1000)
        }else if(props.effect == 'Liquid'){
            setTimeout(() => createLiquid(), 1000)
        }else if(props.effect == 'Rolling'){
            setTimeout(() => createRolling(), 1000)
        }else if(props.effect == 'Sliding'){
            setTimeout(() => createSliding(), 1000)
        }
    })
/*
    gui.add(props, 'uOffset', 0,1);
    gui.add(props, 'uRotation', 0,1);
    gui.add(props, 'uApplyBlur', 0,1);
    gui.add(props, 'uAnimateNoise', 0,1);*/
  

// Choose from named values
  //  gui.add(text1, 'speed', { Stopped: 0, Slow: 1, Fast: 1 } ).listen();

  
//---


var update = function() {

    requestAnimationFrame(update);
  
    // Iterate over all controllers
    for (var i in gui.__controllers) {
       
      gui.__controllers[i].updateDisplay();
    }
  
  };
  
  update();
//---
var blotter;
var scope2;
 

  
   var createChannelSplit = function () {
    var materialChannelSplit = new Blotter.ChannelSplitMaterial();
          //channel
          materialChannelSplit.uniforms.uOffset.value = props.uOffset; //5
          materialChannelSplit.uniforms.uRotation.value = props.uRotation; //0.5
          materialChannelSplit.uniforms.uApplyBlur.value = props.uApplyBlur; // 0 false, 1 true
          materialChannelSplit.uniforms.uAnimateNoise.value = props.uAnimateNoise; //3

    text = new Blotter.Text(props.content, property)
    blotter= new Blotter(materialChannelSplit, {
        texts: text
        })

        scope2 = blotter.forText(text);
        scope2.appendTo(document.body);
        if($(".b-canvas")[0] && $(".b-canvas").length > 1){
            $(".b-canvas")[0].remove();
          //  console.log($(".b-canvas")[0])
            }
            document.onmousemove = moveIt;
            function moveIt(event) {
            
                materialChannelSplit.uniforms.uRotation.value = (event.clientX * .1);
                materialChannelSplit.uniforms.uOffset.value = (event.clientX * .0001);
            
            }
            
            
   } 

  var createFlies = function () {
           
        //flies
        var materialFlies = new Blotter.FliesMaterial();
        materialFlies.uniforms.uPointCellWidth.value = 0.01;
        materialFlies.uniforms.uPointRadius.value = .5;
        materialFlies.uniforms.uSpeed.value = 5;

    text = new Blotter.Text(props.content, property)
    blotter= new Blotter(materialFlies, {
        texts: text
        })

        scope2 = blotter.forText(text);
        scope2.appendTo(document.body);
        if($(".b-canvas")[0] && $(".b-canvas").length > 1){
            $(".b-canvas")[0].remove();
          //  console.log($(".b-canvas")[0])
            }
            document.onmousemove = moveIt2;
        function moveIt2(event) {

            materialFlies.uniforms.uPointCellWidth.value = 0.02;
            materialFlies.uniforms.uPointRadius.value = (event.clientX * 0.001);
            materialFlies.uniforms.uSpeed.value = (event.clientX * 0.02);

        }
         
   }

   // Liquid

   var createLiquid = function() {
    var materialLiquid = new Blotter.LiquidDistortMaterial();
    materialLiquid.uniforms.uVolatility.value = 0.03;
    materialLiquid.uniforms.uSeed.value = 0;
    materialLiquid.uniforms.uSpeed.value = .4; 
    
    
    
    var blotter = new Blotter(materialLiquid, {
       texts: text
    })
    
    var scope3 = blotter.forText(text);
    
    scope3.appendTo(document.body);

    if($(".b-canvas")[0] && $(".b-canvas").length > 1){
        $(".b-canvas")[0].remove();
      //  console.log($(".b-canvas")[0])
        }
    
    document.onmousemove = moveIt3;
    function moveIt3(event) {
    
        materialLiquid.uniforms.uVolatility.value = (event.clientX * 0.001);
        materialLiquid.uniforms.uSeed.value = (event.clientX * 0.5);
        materialLiquid.uniforms.uSpeed.value = (event.clientX * 0.01);
    
    }
   }

   // Rolling

   var createRolling = function() {
    var materialRolling = new Blotter.RollingDistortMaterial();
    materialRolling.uniforms.uSineDistortSpread.value = 1;
    materialRolling.uniforms.uSineDistortCycleCount.value = 2;
    materialRolling.uniforms.uSineDistortAmplitude.value = .4; 
    materialRolling.uniforms.uNoiseDistortVolatility.value = .1; 
    materialRolling.uniforms.uNoiseDistortAmplitude.value = .3; 
    //material4.uniforms.uDistortPosition.value = .3; 
    materialRolling.uniforms.uRotation.value = .90;
    materialRolling.uniforms.uSpeed.value = .3; 
    
    
    var blotter = new Blotter(materialRolling, {
       texts: text
    })
    
    var scope3 = blotter.forText(text);
    
    scope3.appendTo(document.body);

    if($(".b-canvas")[0] && $(".b-canvas").length > 1){
        $(".b-canvas")[0].remove();
      //  console.log($(".b-canvas")[0])
        }
    
    document.onmousemove = moveIt4;
    function moveIt4(event) {
    
        //materialRolling.uniforms.uSineDistortSpread.value = (event.clientX * 0.005);
       // materialRolling.uniforms.uSineDistortCycleCount.value = (event.clientX * 0.001);
     //   materialRolling.uniforms.uSineDistortAmplitude.value = (event.clientX * 0.002); 
     materialRolling.uniforms.uNoiseDistortVolatility.value = (event.clientX * 0.07); 
      //  materialRolling.uniforms.uNoiseDistortAmplitude.value = (event.clientX * 0.01); 
        //materialRolling.uniforms.uRotation.value = (event.clientX * 0.01);
        //materialRolling.uniforms.uSpeed.value = (event.clientX * 0.01); 
    
    }
   }

   // Sliding
   var createSliding = function() {
    var materialSliding = new Blotter.SlidingDoorMaterial();
    materialSliding.uniforms.uDivisions.value =20;
    materialSliding.uniforms.uDivisionWidth.value = .2;
    materialSliding.uniforms.uAnimateHorizontal.value = 0;
    materialSliding.uniforms.uFlipAnimationDirection.value = 1;
    materialSliding.uniforms.uSpeed.value = .3;
    
    
    var blotter = new Blotter(materialSliding, {
       texts: text
    })
    
    var scope4 = blotter.forText(text);
    
    scope4.appendTo(document.body);

    if($(".b-canvas")[0] && $(".b-canvas").length > 1){
        $(".b-canvas")[0].remove();
      //  console.log($(".b-canvas")[0])
        }
    
    document.onmousemove = moveIt5;
    function moveIt5(event) {
        console.log(event.clientX)
      //  materialSliding.uniforms.uDivisions.value = 10;
        //materialSliding.uniforms.uDivisionWidth.value = .1;
        materialSliding.uniforms.uAnimateHorizontal.value = 0;
        materialSliding.uniforms.uFlipAnimationDirection.value =0
        materialSliding.uniforms.uSpeed.value = (event.clientX * 0.001);
    
    }
   }
  
    
    
  

});
