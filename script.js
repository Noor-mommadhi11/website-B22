 var stdid = parseInt(prompt('Enter the Student ID'));
    var stname = prompt('Enter the Name');
    
    var m1 = parseInt(prompt('Enter the TAMIL mark'));
    var m2 = parseInt(prompt('Enter the English mark'));
    var m3 = parseInt(prompt('Enter the Maths mark'));
    var m4 = parseInt(prompt('Enter the Science mark'));
    var m5 = parseInt(prompt('Enter the Social mark'));

    var total = m1 + m2 + m3 + m4 + m5;
    var percentage = (total * 100) / 500.0;

    document.write("Student ID: " + stdid+"<br>");
    document.write("Student Name: " + stname+"<br>");
    document.write("Total Marks: " + total+"<br>");
    document.write("Percentage: " + percentage + "%");

    if (percentage >= 90) {
      alert("Grade: A+");
    } else if (percentage >= 80) {
      alert("Grade: A");
    } else if (percentage >= 70) {
      alert("Grade: B");
    } else if (percentage >= 60) {
      alert("Grade: C");
    } else if (percentage >= 50) {
      alert("Grade: D");
    } else {
      alert("Grade: FAIL");
    }
