const animationTimeline = () => {
  // split chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("textbox_chat")[0];
  const wishhbd = document.getElementsByClassName("wish_hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span>`;
  wishhbd.innerHTML = `<span>${wishhbd.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  const textTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const textTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg",
  };

  const tl = new TimelineMax();

  tl.to(".container", 0.6, {
    visibility: "visible",
  })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10,
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=3"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "-=1"
    )
    .from(".second", 0.7, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".second",
      0.4,
      {
        opacity: 0,
        y: 10,
      },
      "+=3"
    )
    .from(".third", 0.7, {
      opacity: 0,
      scale: 0.2,
    })
    .from(".button", 0.3, {
      opacity: 0,
      scale: 0.2,
    })
    .staggerTo(
      ".textbox_chat span",
      1.5,
      {
        visibility: "visible",
      },
      0.05
    )
    .to(
      ".button",
      0.1,
      {
        backgroundColor: "rgb(127,206,248)",
      },
      "+=4"
    )
    .to(
      ".third",
      0.5,
      {
        opacity: 0,
        scale: 0.2,
        y: -150,
      },
      "+=1"
    )

    .from(".one1", 0.7, textTrans)
    .to(".one1", 0.7, textTransLeave, "+=2")
    .from(".two1", 0.7, textTrans)
    .to(".two1", 0.7, textTransLeave, "+=2")
    .from(".three1", 0.7, textTrans)
    .to(".three1 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff",
    })
    .to(".three1", 0.7, textTransLeave, "+=2")
    .from(".four1", 0.7, textTrans)
    .to(".four1", 0.7, textTransLeave, "+=2")
    .from(
      ".five1",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-15deg",
        y: 50,
        z: 10,
        opacity: 0,
      },
      "+=1"
    )
    .to(
      ".five1 span",
      0.7,
      {
        rotation: 90,
        x: 8,
      },
      "+=1.5"
    )
    .to(
      ".five1",
      0.7,
      {
        opacity: 0,
        scale: 0.2,
      },
      "+=2"
    )
    .staggerFrom(
      ".six1 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
      },
      0.4
    )
    .staggerTo(
      ".six1 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
      },
      0.2,
      "+=1.5"
    )

    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1400,
      },
      0.2
    )
    .from(
      ".profile",
      1,
      {
        opacity: 0,
        scale: 0.5,
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      "-=2"
    )
    .staggerFrom(
      ".wish_hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1
    )
    .staggerTo(
      ".wish_hbd span",
      0.7,
      {
        scale: 1.4,
        rotateY: 150,
      },
      {
        scale: 1,
        rotateY: 0,
        color: "#ff69b",
        ease: Expo.easeOut,
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
      },
      "party"
    )

    .staggerTo(
      ".seventh svg",
      0.8,
      {
        opacity: 0,
        visibility: "visible",
        scale: 80,
        repeat: 2,
        repeatDelay: 0.6,
      },
      0.3
    )
    .to(".fifth", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1",
    })

    .staggerFrom(".eighth p", 1, textTrans, 1.2);

  // make replay button
  const replayBtn = document.getElementById("replay");
  replayBtn.addEventListener("click", () => {
    tl.restart();
  });

  // make direct button
  const directBtn = document.getElementById("direct");
  directBtn.addEventListener("click", () => {
    window.location.href = "../index1.html";
  });
};

animationTimeline();
