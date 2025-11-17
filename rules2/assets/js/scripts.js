document.addEventListener("DOMContentLoaded", (function() {
    const e = document.querySelector("header");
    if (e) {
        e.style.display = "block",
        e.style.visibility = "visible",
        e.style.opacity = "1",
        e.style.position = "fixed",
        e.style.top = "0",
        e.style.left = "0",
        e.style.width = "100%",
        e.style.zIndex = "1000",
        console.log("Header visibility enforced");
        new MutationObserver((function(t) {
            t.forEach((function(t) {
                "attributes" !== t.type || "style" !== t.attributeName && "class" !== t.attributeName || "none" !== e.style.display && "hidden" !== e.style.visibility && "0" !== e.style.opacity || (console.warn("Header visibility compromised, fixing..."),
                e.style.display = "block",
                e.style.visibility = "visible",
                e.style.opacity = "1")
            }
            ))
        }
        )).observe(e, {
            attributes: !0,
            attributeFilter: ["style", "class"]
        })
    }
    (window.location.search.includes("theme=") || window.location.search.includes("lang=")) && window.history.replaceState({}, document.title, window.location.pathname);
    const t = document.getElementById("accountDropdown")
      , o = document.getElementById("dropdownMenu");
    t && o ? (console.log("Dropdown elements found, initializing..."),
    o.classList.remove("show"),
    t.classList.remove("active"),
    t.addEventListener("click", (function(e) {
        e.preventDefault(),
        e.stopPropagation(),
        console.log("Account button clicked");
        const n = o.classList.contains("show");
        console.log("Dropdown is currently:", n ? "open" : "closed"),
        document.querySelectorAll(".dropdown-menu").forEach(e => {
            e.classList.remove("show")
        }
        ),
        document.querySelectorAll(".account-btn").forEach(e => {
            e.classList.remove("active")
        }
        ),
        n ? console.log("Dropdown closed") : (o.classList.add("show"),
        t.classList.add("active"),
        console.log("Dropdown opened"))
    }
    )),
    document.addEventListener("click", (function(e) {
        t.contains(e.target) || o.contains(e.target) || (o.classList.remove("show"),
        t.classList.remove("active"),
        console.log("Dropdown closed by outside click"))
    }
    )),
    o.addEventListener("click", (function(e) {
        e.stopPropagation()
    }
    )),
    document.addEventListener("keydown", (function(e) {
        "Escape" === e.key && (o.classList.remove("show"),
        t.classList.remove("active"))
    }
    ))) : console.error("Dropdown elements not found:", {
        accountBtn: !!t,
        dropdownMenu: !!o
    });
    const n = document.getElementById("menuToggle")
      , s = document.querySelector(".nav-menu");
    n && s ? n.addEventListener("click", (function(e) {
        e.preventDefault(),
        e.stopPropagation(),
        s.classList.toggle("active"),
        n.classList.toggle("active")
    }
    )) : console.error("Mobile menu elements not found in main script:", {
        menuToggle: !!n,
        navMenu: !!s
    }),
    window.addEventListener("load", (function() {
        const e = document.querySelector(".loader-overlay");
        e && (e.classList.add("hidden"),
        setTimeout( () => {
            e.style.display = "none"
        }
        , 1e3))
    }
    ));
    const i = document.querySelector(".discord-avatar-img");
    i && i.addEventListener("error", (function() {
        this.src = "../assets/images/characters/default.webp"
    }
    ))
}
));
