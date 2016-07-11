// 1.
console.log("Problem 1");
for (i=0; i <= 1000; i=i+100)
{
  console.log(i);
}

// 2.
console.log("Problem 2");
for (t=1; t <= 128; t=t*2)
{
  console.log(t);
}

// 3.
console.log("Problem 3");
for (j=0; j <= 10; j=j+2)
{
  console.log(j);
}

// 4.
console.log("Problem 4");
for (y=3; y<=15; y=y+3)
{
  console.log(y);
}

// 5.
console.log("Problem 5");
for (a=9; a>=0; a--)
{
  console.log(a);
}

// 6.
console.log("Problem 6");
for (g=1; g<=4; g++)
{
  for (m=1; m<=3; m++)
  {
    console.log(g);
  }
}

// 7.
console.log("Problem 7");
for (h=0; h<=4; h++)
{
  for (f=0; f<=4; f++)
  {
    console.log(f);
  }
}

// 8.
console.log("Problem 8");
for (i=1; i <= 25; i++)
{
  if (i % 2 === 0)
  {
    console.log(i + 'even');
  }
  else if (i % 2 !== 0)
  {
    console.log(i + "odd");
  }
}

// 9.
console.log("Problem 9");
for (w=1; w<=50; w++)
{

  if (w % 3 === 0 && w % 5 ===0)
  {
    console.log("FizzBuzz");
  }

  else if (w % 3 === 0)
  {
    console.log("Fizz");
  }

  else if (w % 5 === 0)
  {
    console.log("Buzz");
  }

  else
  {
    console.log(w);
  }
}

// 10.
console.log("Problem 10");
var total = 0;
for (v=0; v<=1000; v++)
{
  if (v % 3 === 0 || v % 5 === 0)
  {
    total = total + v;
  }
}
console.log(total);

// 11.
console.log("Problem 11");

var hashtag = "";
for (e=0; e<7; e++)
{
  hashtag += "#";
  console.log(hashtag);
}
