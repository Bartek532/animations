const frames = document.querySelectorAll(".main .anime");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const repeat = document.querySelector(".redo");

for (let i = 0; i < frames.length; i++) {
	frames[i].addEventListener("click", () => {
		modal.style.zIndex = 100;
		modal.style.opacity = 1;
		frames[i].classList.add("active");
		document.querySelector(".modal .frame").innerHTML = document.querySelector(
			".active .animation"
		).innerHTML;
		animation(i);

		close.addEventListener("click", () => {
			modal.style.zIndex = -1;
			modal.style.opacity = 0;
			frames[i].classList.remove("active");
		});
	});
}

function animation(value) {
	switch (value) {
		case 0:
			one();
			break;
		case 1:
			two();
			break;
		case 2:
			three();
			break;
		case 3:
			four();
			break;
		case 4:
			five();
			break;
		case 5:
			six();
			break;
		case 6:
			seven();
			break;
		case 7:
			eight();
			break;
		case 8:
			nine();
			break;
	}
}

function one() {
	const tl = new TimelineMax();

	tl.addLabel("start")
		.from(
			".modal .modal #floor",
			0.7,
			{
				scaleX: 0,
			},
			"start"
		)
		.from(
			".modal #person",
			0.7,
			{
				opacity: 0,
				x: 200,
			},
			"start"
		)
		.from(".modal #chat", 0.7, {
			scale: 0,
			transformOrigin: "100% 100%",
		})
		.staggerFrom(
			".modal #words path",
			0.4,
			{
				scaleX: 0,
			},
			0.3
		)
		.add(function () {}, "+=1")
		.staggerTo(
			".modal #words path",
			0.4,
			{
				scaleX: 0,
				transformOrigin: "100% 50%",
			},
			0.3
		)
		.to(".modal #chat", 0.7, {
			scale: 0,
			transformOrigin: "100% 100%",
		})
		.addLabel("close")
		.to(
			".modal #person",
			0.7,
			{
				opacity: 0,
				x: 200,
			},
			"close"
		)
		.to(
			".modal #floor",
			0.7,
			{
				scaleX: 0,
			},
			"close"
		);

	repeat.addEventListener("click", () => {
		tl.restart();
	});
}

function two() {
	const tl = new TimelineMax();

	tl.to(".modal #plus", 0.5, {
		scale: 0.7,
		transformOrigin: "center center",
	})
		.from(".modal #ball", 0.7, {
			x: -400,
		})
		.from(".modal #person", 0.7, {
			y: -300,
			opacity: 0,
			ease: Power3.easeOut,
		})
		.from(".modal #post", 0.6, {
			scale: 0,
			ease: Power4.easeOut,
		})
		.to(".modal #post", 0.7, {
			x: 100,
			y: -160,
			scale: 1.3,
			rotation: 8,
			ease: Sine.easeOut,
		})
		.to(".modal #post", 0.7, {
			scaleY: 1.45,
			scaleX: 1.5,
			x: 305,
			y: -62,
			rotation: 8.7,
			ease: Bounce.easeOut,
		});

	repeat.addEventListener("click", () => {
		tl.restart();
	});
}

function three() {
	const tl = new TimelineMax();

	tl.addLabel("phone")
		.from(
			".modal #phone",
			0.8,
			{
				y: -600,
				opacity: 0,
				ease: Power4.easeOut,
			},
			"phone"
		)
		.from(
			".modal #floor",
			0.8,
			{
				scale: 0,
				transformOrigin: "center center",
				ease: Power4.easeOut,
			},
			"phone"
		)
		.from(".modal #chatter1", 0.4, {
			x: 70,
			opacity: 0,
		})
		.from(".modal #chat1", 0.8, {
			scale: 0,
			transformOrigin: "100% 100%",
			ease: Elastic.easeOut,
		})
		.from(".modal #person", 0.6, {
			x: -200,
			opacity: 0,
			ease: Power3.easeOut,
		})
		.from(".modal #personChat", 0.8, {
			scale: 0,
			transformOrigin: "0% 100%",
			ease: Elastic.easeOut,
		})
		.from(".modal #chatter2", 0.4, {
			x: 70,
			opacity: 0,
		})
		.from(".modal #chat2", 0.8, {
			scale: 0,
			transformOrigin: "100% 100%",
			ease: Elastic.easeOut,
		});

	repeat.addEventListener("click", () => {
		tl.restart();
	});
}

function four() {
	const tl = new TimelineMax();

	tl.from(".modal #person", 0.6, {
		x: 150,
		opacity: 0,
	})
		.staggerFrom(
			".modal #dots path",
			0.5,
			{
				opacity: 0,
			},
			0.5
		)
		.set(".modal #chart2", {
			y: 13.7,
			x: -23,
		})
		.addLabel("chart")
		.from(
			".modal #chart1",
			0.5,
			{
				scale: 0,
				transformOrigin: "center center",
				ease: Power3.easeOut,
			},
			"chart"
		)
		.from(
			".modal #chart2",
			0.5,
			{
				scale: 0,
				transformOrigin: "center center",
				ease: Power3.easeOut,
			},
			"chart"
		)
		.from(".modal #line1", 0.6, {
			scaleX: 0,
			transformOrigin: "100% 0%",
			ease: Sine.easeOut,
		})
		.from(".modal #percent1", 0.3, {
			opacity: 0,
		})
		.to(".modal #chart2", 0.6, {
			x: 0,
			y: 0,
		})
		.from(".modal #line2", 0.6, {
			scaleX: 0,
			transformOrigin: "0% 100%",
			ease: Sine.easeOut,
		})
		.from(".modal #percent2", 0.3, {
			opacity: 0,
		});

	repeat.addEventListener("click", () => {
		tl.restart();
	});
}

function five() {
	const tl = new TimelineMax();

	tl.addLabel("clock")
		.set(".modal #hand", {
			transformOrigin: "100% 0%",
			x: -5,
			rotation: -43,
		})
		.from(
			".modal #clock",
			0.7,
			{
				y: -500,
				opacity: 0,
			},
			"clock"
		)
		.from(
			".modal #floor",
			0.7,
			{
				scale: 0,
				transformOrigin: "center center",
			},
			"clock"
		)
		.from(
			".modal #person",
			2,
			{
				x: -700,
				ease: Expo.easeOut,
			},
			"clock"
		)
		.to(".modal #hand", 0.5, {
			rotation: 15,
		})
		.addLabel("arrow")
		.to(
			".modal #hand",
			0.3,
			{
				rotation: 0,
			},
			"arrow"
		)
		.to(
			".modal #arrow",
			0.6,
			{
				rotation: 95,
				transformOrigin: "0% 0%",
				x: 50,
				ease: Power4.easeOut,
			},
			"arrow"
		)
		.to(".modal #spring", 0.7, {
			x: 200,
			opacity: 0,
			ease: Sine.easeIn,
		})
		.from(".modal #winter", 0.7, {
			x: -200,
			opacity: 0,
			ease: Sine.easeOut,
		});

	repeat.addEventListener("click", () => {
		tl.restart();
	});
}

function six() {
	const tl = new TimelineMax();

	tl.staggerFrom(
		".modal #town path",
		0.5,
		{
			scale: 0,
		},
		0.2
	)
		.from(".modal #circle", 0.6, {
			scale: 0,
			transformOrigin: "center center",
		})
		.from(".modal #pin", 0.7, {
			y: -150,
			scaleY: 0,
			transformOrigin: "50% 0%",
		})
		.addLabel("move")
		.to(
			".modal #circle",
			1,
			{
				x: 120,
				ease: Power2.easeOut,
			},
			"move"
		)
		.to(
			".modal #pin",
			1,
			{
				x: 120,
				ease: Power2.easeOut,
			},
			"move"
		)
		.addLabel("two")
		.to(
			".modal #circle",
			1,
			{
				y: -120,
				ease: Power2.easeOut,
			},
			"two"
		)
		.to(
			".modal #pin",
			1,
			{
				y: -120,
				ease: Power2.easeOut,
			},
			"two"
		)
		.addLabel("three")
		.to(
			".modal #circle",
			1,
			{
				y: 0,
				ease: Power2.easeOut,
			},
			"three"
		)
		.to(
			".modal #pin",
			1,
			{
				y: 0,
				ease: Power2.easeOut,
			},
			"three"
		)
		.addLabel("four")
		.to(
			".modal #circle",
			1,
			{
				x: 0,
				ease: Power2.easeOut,
			},
			"four"
		)
		.to(
			".modal #pin",
			1,
			{
				x: 0,
				ease: Power2.easeOut,
			},
			"four"
		);

	repeat.addEventListener("click", () => {
		tl.restart();
	});
}

function seven() {
	const tl = new TimelineMax();

	tl.staggerFrom(
		".modal #stemps path",
		0.5,
		{
			scaleY: 0,
			transformOrigin: "50% 100%",
		},
		0.5
	)
		.staggerFrom(
			".modal #leafs path",
			0.7,
			{
				scale: 0,
				transformOrigin: "center center",
			},
			0.7
		)
		.from(".modal #chat3", 0.7, {
			scale: 0,
			transformOrigin: "0% 100%",
			ease: Elastic.easeOut.config(1, 0.5),
		})
		.from(".modal #chat1", 0.7, {
			scale: 0,
			transformOrigin: "100% 100%",
			ease: Elastic.easeOut.config(1, 0.5),
		})
		.from(".modal #chat2", 0.7, {
			scale: 0,
			transformOrigin: "100% 100%",
			ease: Elastic.easeOut.config(1, 0.5),
		});

	repeat.addEventListener("click", () => {
		tl.restart();
	});
}

function eight() {
	const tl = new TimelineMax();

	tl.from(".modal #hands [id^=Vector]", 0.7, {
		x: -200,
		opacity: 0,
		transformOrigin: "0% 50%",
		ease: Power2.easeOut,
	})
		.from(".modal #ground", 0.7, {
			y: -400,
			opacity: 0,
			ease: Power3.easeOut,
		})
		.staggerFrom(
			".modal #stemps path",
			0.5,
			{
				scaleY: 0,
				transformOrigin: "50% 100%",
				ease: Sine.easeOut,
			},
			0.5
		)
		.staggerFrom(
			".modal #leafs path",
			0.1,
			{
				transformOrigin: "center center",
				scale: 0,
				ease: Power4.easeIn,
			},
			0.1
		);

	repeat.addEventListener("click", () => {
		tl.restart();
	});
}

function nine() {
	const tl = new TimelineMax();

	tl.addLabel("zero")
		.from(".modal #zero", 1, {
			y: -400,
			opacity: 0,
			ease: Power3.easeOut,
		})
		.from(
			".modal #floor",
			1,
			{
				scale: 0,
				transformOrigin: "center center",
				ease: Power3.easeOut,
			},
			"zero"
		)
		.addLabel("four")
		.from(".modal #four1", 1.7, {
			x: 660,
			opacity: 0,
			ease: Power3.easeOut,
		})
		.from(
			".modal #four2",
			1.7,
			{
				x: -660,
				opacity: 0,
				ease: Power3.easeOut,
			},
			"four"
		);

	repeat.addEventListener("click", () => {
		tl.restart();
	});
}
