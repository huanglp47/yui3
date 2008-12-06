<h2 class="first">Simple Profiling Example</h2>

<p>This example begins by creating a namespace:</p>
<textarea name="code" class="JScript" cols="60" rows="1">
Y.namespace("example.profiler");  
</textarea>
<p>This namespace serves as the core object upon which others will be added (to prevent creating global objects).</p>
<p>Next, an object is created with a method:</p>
<textarea name="code" class="JScript" cols="60" rows="1">
//object with method to profile
Y.example.profiler.MathHelper = {    
    factorial : function (num){
        if (num > 1) {
            return num * MathHelper.factorial(num-1);
        } else {
            return 1;
        }
    }    
};
</textarea>
<p>This object, <code>MathHelper</code> contains a single method called <code>factorial()</code> that computes the
factorial of a given number. Any time <code>factorial()</code> is called, the argument indicates how many times
the function will be recursively called. For example, <code>factorial(10)</code> results in the funtion being
called 10 times. This makes it an ideal test case for profiling because the results are so predictable.</p>
<h3>Registering the function</h3>
<p>The most important step to profile this function is to call <code>registerFunction()</code> with the fully-qualified
function name, which is <code>Y.example.profiler.MathHelper</code>, and the object:</p>
<textarea name="code" class="JScript" cols="60" rows="1">
Y.Profiler.registerFunction("Y.example.profiler.MathHelper.factorial", Y.example.profiler.MathHelper);
</textarea>
<p>Since this function is not fully accessible in the global scope, the owner object must be passed in
as the second argument.</p>

<h3>Running the example</h3>

<p>With everything setup, the last step is to run the code. This initialization is assigned to take place when the window has been 
completely loaded by using the <code>window.onload</code> event handler:</p>

<textarea name="code" class="JScript" cols="60" rows="1">
window.onload = function (){

    Y.example.profiler.MathHelper.factorial(10);
    
    var calls = Y.Profiler.getCallCount("Y.example.profiler.MathHelper.factorial");
    var max = Y.Profiler.getMax("Y.example.profiler.MathHelper.factorial");
    var min = Y.Profiler.getMin("Y.example.profiler.MathHelper.factorial");
    var avg = Y.Profiler.getAverage("Y.example.profiler.MathHelper.factorial");
    
    Y.Profiler.unregisterFunction("Y.example.profiler.MathHelper.factorial");
    
    var msg = "Method Y.example.profiler.MathHelper was run " + calls + "times.\n" +
            "The average time was " + avg + "ms.\n" +
            "The max time was " + max + " ms.\n" +
            "The min time was " + min + " ms.";
    alert(msg);  
};
</textarea>
<p>The code block begins by calling <code>factorial()</code> once, which gets profiled. Then, the information
about the function can be retrieved from the Profiler. This information is output into the Logger on the page,
displaying the number of times that the function was called along with the minimum, maximum, and average
running times. Since this is a very simple function, the run times will most likely be 0ms on most machines.</p>