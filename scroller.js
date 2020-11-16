
// Change these variable values to customize your scroller.

var startNumber = 0;
var endNumber = 20;
var widthOfOneColumn = 40;
var stepValue = 2;

// Do not change anything below this line.

// Build the scrolling list.

var totalNumbers = ((endNumber-startNumber)+2);

const scrollerBlock = document.getElementById("scroller-block");
scrollerBlock.style.gridTemplateColumns = "repeat(" + totalNumbers + ", " + widthOfOneColumn + "px)";
scrollerBlock.style.paddingLeft = "" + widthOfOneColumn + "px";

// Setting the width of the scroller block.

const scroller = document.getElementById("scroller");
scroller.style.width = "" + 3*widthOfOneColumn + "px";

// Position the circular indicator.

const selectedValueIndicator = document.getElementById("selectedValueIndicator");
selectedValueIndicator.style.width = "" + widthOfOneColumn + "px";
selectedValueIndicator.style.marginLeft = "" + widthOfOneColumn + "px";

// Fill value to the scrolling list.

var z = startNumber;

while (z < endNumber+stepValue+1) {

	const listItem = document.createElement("p");
	listItem.className = "numberInScroller";
	listItem.style.width = "" + widthOfOneColumn + "px";
	listItem.innerHTML = "" + z + "";
	if (z > endNumber) 
	{
		listItem.style.opacity = "0%";
	}
	scrollerBlock.append(listItem);
	z=z+stepValue;
}

// Capture and printing the value at the centre.

const printvalue = document.getElementById("scrollValue");

function getScrollLeft() {
		const finalValue = ((((scroller.scrollLeft)/widthOfOneColumn)*stepValue)+startNumber);
		printvalue.innerHTML = "" + finalValue + "";
		console.log(finalValue);
		}


