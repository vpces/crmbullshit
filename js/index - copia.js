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


var firstPart = [
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

var secondPart = [
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

var preFirstPart = [
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


   
 $("#generate").click(function (e) {
     BullshitJobTitleGenerator(); 
});
        

     

  
  // Create a random job title
 function BullshitJobTitleGenerator() {
    try {
      var title = '<span>' + preFirstPart[this.randomNumber(0, preFirstPart.length - 1)];
        
      title += " " + firstPart[randomNumber(0, firstPart.length - 1)];
      
        title += " " + secondPart[randomNumber(0, secondPart.length - 1)] + "</span >";
  
        alert(title);
    } catch (e) {

    }
  };
  
  // Create a random number
  // min / max
function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };




