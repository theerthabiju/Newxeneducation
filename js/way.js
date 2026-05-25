   (function () {
        var xjCurrent = 0;

        var xjData = [
          {
            num: "01",
            year: "2018",
            title: "A Humble Beginning",
            text: "In 2018, Xeventure IT Solutions was born in a small room with a young, dynamic team determined to revolutionize the IT landscape. What started as a bold vision in a modest space became the foundation for everything that followed.",
          },
          {
            num: "02",
            year: "2019",
            title: "New Opportunities",
            text: "On a mission to expand IT-oriented job sectors in Wayanad, we introduced more career opportunities in digital marketing, graphic designing, and web development — opening new doors for the local talent pool.",
          },
          {
            num: "03",
            year: "2020",
            title: "Growth & Expansion",
            text: "With our exponential growth, we expanded from our small space to 1000 square feet. Then we doubled our space and amplified our digital footprint along the way, building a stronger team and a wider client base.",
          },
          {
            num: "04",
            year: "2021",
            title: "Resilience in Crisis",
            text: "Rising above the pandemic's storm, we embraced resilience. Offering remote work options to our dedicated team, we defied the IT industry crash and soared to new heights during the most challenging period.",
          },
          {
            num: "05",
            year: "Today",
            title: "A New Chapter",
            text: "Today with 25+ exceptional employees and 50+ satisfied clients spanning 20 countries, we proudly lead the way. Recognizing the talent gap in Wayanad, we ignited Xen Education — empowering the next generation of skilled professionals.",
          },
        ];

        window.xjSet = function (n) {
          var stops = document.querySelectorAll(".xj-stop");
          var dots = document.querySelectorAll(".xj-dot");

          stops[xjCurrent].classList.remove("active");
          dots[xjCurrent].classList.remove("active");

          xjCurrent = n;

          stops[n].classList.add("active");
          dots[n].classList.add("active");

          var d = xjData[n];
          document.getElementById("xjd-num").textContent = d.num;
          document.getElementById("xjd-year").textContent = d.year;
          document.getElementById("xjd-title").textContent = d.title;
          document.getElementById("xjd-text").textContent = d.text;

          /* fade effect on detail panel */
          var panel = document.getElementById("xj-detail");
          panel.style.opacity = "0";
          setTimeout(function () {
            panel.style.opacity = "1";
          }, 100);
        };

        /* drag-to-scroll on track */
        var wrap = document.querySelector(".xj-track-wrap");
        if (wrap) {
          var isDown = false,
            startX,
            scrollLeft;
          wrap.addEventListener("mousedown", function (e) {
            isDown = true;
            startX = e.pageX - wrap.offsetLeft;
            scrollLeft = wrap.scrollLeft;
          });
          wrap.addEventListener("mouseleave", function () {
            isDown = false;
          });
          wrap.addEventListener("mouseup", function () {
            isDown = false;
          });
          wrap.addEventListener("mousemove", function (e) {
            if (!isDown) return;
            e.preventDefault();
            var x = e.pageX - wrap.offsetLeft;
            wrap.scrollLeft = scrollLeft - (x - startX);
          });
        }
      })();
  