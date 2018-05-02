/*
 * Bullshit Job Title Generator
 *  
 * Inspired by https://github.com/bullgit/bullshit-job-titles
 * by bullgit.github.io
 * 
 * 
 * 2013 by Tim Pietrusky
 * timpietrusky.com
 */

BullshitJobTitleGenerator = (function() {
    
  function BullshitJobTitleGenerator(args) {
    try {
      // Parent element
      this.el = $(args.el);
      this.button = this.el.find(args.button);
      this.appendAfterEl = this.el.find("hr");
      this.generatedEl = this.el.find(args.generatedClassName);
      
      this.generated = 0;
      
      // The name of the class of each job title
      this.className = args.className;
      
      this.firstPart = [
        'Modular',
        'Scalable',
		'Refactor',
		'Performance',
		'Standard',
		'Custom',
		'Out of the box',
		'Creation',
		'Editable',
		'Angular',
		'React'
      ];
      
      this.secondPart = [
        'Grid',
        'Workflow',
        'Plugin',
        'Deployment',
		'Compilation',
		'Advanced View',
		'Chart',
		'Panel',
		'Filter',
		'Unified service desk',
		'Integration',
		'Migration',
		'Lead',
		'E-mail template',
		'Email-to-Case',
		'Custom Action',
		'Ribbon'		
      ];
      
      this.preFirstPart = [
        'Super',
		'Auto-completed',
		'Agile',
		'Mega',
		'Iterative',
		'Evoluted',
		'Paranoic',
		'Special',
		'Retro',
		'Automated',
		'Background'
      ];
      
      //Create a random job title on click
        //this.button.on('click', $.proxy(function (e) {            
        //this.random();
        //}, this));

        $("#generate").click(function (e) {
            alert("hola");            
            e.random();
        });
        
      // First title
      this.random();
      
    } catch (e) {}
  };
  
  // Create a random job title
  BullshitJobTitleGenerator.prototype.random = function() {
    try {
      var title = '<span>' + this.preFirstPart[this.randomNumber(0, this.preFirstPart.length - 1)];
        
      title += " " + this.firstPart[this.randomNumber(0, this.firstPart.length - 1)];
      
        title += " " + this.secondPart[this.randomNumber(0, this.secondPart.length - 1)] + "</span >";
  
      var child = $(
        '<h2>'
        + title +
        '</h2>'
      );
      
      // Increase count of generated titles
      this.generated += 1;
      
      // Add count to the DOM
      // this.generatedEl.html(this.generated);
      
      // Add a random class
      child.addClass(this.className + this.randomNumber(1, 12));
      
      //  this.generated
      child.attr("data-position", this.generated);
      
      // Add generated title to the DOM
      this.appendAfterEl.after(child);
    } catch (e) {
      this.random();
    }
  };
  
  // Create a random number
  // min / max
  BullshitJobTitleGenerator.prototype.randomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return BullshitJobTitleGenerator;
})();



new BullshitJobTitleGenerator({
  el : $('[data-js="bullshit-jobtitle-generator"]'),
  button : '> nav > button.generate',
  className : 'bullshit-title-',
  generatedClassName : '> nav > .generated'
});