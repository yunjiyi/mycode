    <!-- 导航功能 -->
 
    document.addEventListener("DOMContentLoaded", function() {
        const toggle = document.getElementById("menu-toggle");
        toggle.addEventListener("click", toggleSidebar);

        let lastScrollY = window.scrollY;
        const header = document.getElementById('header');

        window.addEventListener('scroll', function() {
            if (window.scrollY > lastScrollY) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            lastScrollY = window.scrollY;
        });
    });

    function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('active');
    }
   
    <!-- 子菜单功能 -->

    function toggleSubmenu(submenuId, iconId) {
        var submenu = document.getElementById(submenuId);
        var icon = document.getElementById(iconId);
        
        if (submenu.style.maxHeight) {
            submenu.style.maxHeight = null;
            icon.style.transform = "rotate(0deg)";
        } else {
            submenu.style.maxHeight = submenu.scrollHeight + "px";
            icon.style.transform = "rotate(180deg)";
        }
    }

    document.addEventListener("DOMContentLoaded", function() {
        const submenu = document.getElementById('submenu');
        const icon = document.getElementById('icon');
        submenu.style.maxHeight = submenu.scrollHeight + "px"; // 展开子菜单
        icon.style.transform = "rotate(180deg)"; // 更改图标以指示展开状态
    });

    <!-- 滚动条功能 -->

    document.addEventListener('DOMContentLoaded', function() {
        var sidebar = document.getElementById('sidebar');

        sidebar.addEventListener('mouseenter', function() {
            sidebar.style.scrollbarWidth = 'thin'; 
            sidebar.style.overflowY = 'scroll'; 
        });

        sidebar.addEventListener('mouseleave', function() {
            sidebar.style.scrollbarWidth = 'none'; 
            sidebar.style.overflowY = 'hidden'; 
        });

        sidebar.addEventListener('scroll', function() {
            sidebar.style.scrollbarWidth = 'thin'; 
            sidebar.style.overflowY = 'scroll'; 
        });
    });


    <!-- 回到顶部和底部功能 -->

    window.onscroll = function() {
        var backToTopButton = document.getElementById("backToTop");
        var backToBottomButton = document.getElementById("backToBottom");
        
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
        
        if (document.body.scrollTop + window.innerHeight < document.documentElement.scrollHeight - 20) {
            backToBottomButton.style.display = "block";
        } else {
            backToBottomButton.style.display = "none";
        }
    };

    function scrollToTop() {
        const startPosition = window.pageYOffset;
        const duration = 390; 
        let start = null;

        window.requestAnimationFrame(step);

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const progressPercentage = Math.min(progress / duration, 1);
            const scrollStep = startPosition * (1 - progressPercentage);
            window.scrollTo(0, scrollStep);
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        }
    }

    function scrollToBottom() {
        const startPosition = window.pageYOffset;
        const targetPosition = document.documentElement.scrollHeight - window.innerHeight;
        const distance = targetPosition - startPosition;
        const duration = 390; 
        let start = null;

        window.requestAnimationFrame(step);

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const progressPercentage = Math.min(progress / duration, 1);
            const scrollStep = startPosition + distance * progressPercentage;
            window.scrollTo(0, scrollStep);
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        }
    }


    <!-- 搜索功能 -->
 
    function scrollToSection(section) {
        const headerOffset = document.getElementById('header').offsetHeight;
        const elementPosition = section.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        const startPosition = window.pageYOffset;
        const distance = offsetPosition - startPosition;
        const duration = 390;
        let start = null;

        window.requestAnimationFrame(step);

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const progressPercentage = Math.min(progress / duration, 1);
            const scrollStep = distance * progressPercentage + startPosition;
            window.scrollTo(0, scrollStep);
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        }

        document.querySelectorAll('.highlight').forEach(function(el) {
            el.classList.remove('highlight', 'fade-out');
        });
        section.classList.add('highlight');

        setTimeout(function() {
            section.classList.add('fade-out');
        }, 1000);

        setTimeout(function() {
            section.classList.remove('highlight', 'fade-out');
        }, 2000);
    }

    function handleClick(sectionId) {
        const section = document.getElementById(sectionId);
        scrollToSection(section);
        const isSmallScreen = window.innerWidth < 769;
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

        if (isSmallScreen || isTouchDevice) {
            toggleSidebar();
        }
    }

    document.addEventListener("DOMContentLoaded", function() {
        var query = document.getElementById("searchInput");
        var headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
        var resultsContainer = document.getElementById("resultsContainer");
        
        query.addEventListener("input", function() {
            resultsContainer.innerHTML = '';
            var searchText = query.value.toLowerCase();
            if (searchText.trim() === "") {
                return;
            }

            headers.forEach(function(header) {
                if (header.textContent.toLowerCase().includes(searchText)) {
                    var result = document.createElement("div");
                    result.textContent = header.textContent;
                    result.onclick = function() {
                        scrollToSection(header);
                        const isSmallScreen = window.innerWidth < 769;
                        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

                        if (isSmallScreen || isTouchDevice) {
                            toggleSidebar();
                        }
                    };
                    resultsContainer.appendChild(result);
                }
            });
        });
    });