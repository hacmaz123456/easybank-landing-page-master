function Menu() {
    function openMenu() {
        var menuItem = document.getElementById('menu');

        if (menuItem.style.display === 'none') {
            menuItem.style.display = 'block';
        }
        else {
            menuItem.style.display = 'none';
        }
    }

    return (
        <div>
            <div id="menuBtn" onClick={openMenu}>
                <i className="fas fa-bars"></i>
            </div>
            <div className="items" id="menu">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Blog</a>
                <a href="#">Careers</a>
            </div>
        </div>
    );
}

export default Menu;