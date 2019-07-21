$(document).ready(function () {
    let dropdownbool = false;
    $('.dropdown-menu').hide();
    $(document).click(function (e) {
        if (e.target.className.indexOf('dropdown-toggle') != -1)
        {
            dropdownbool = !dropdownbool;
        }
        else if (e.target.className.indexOf('dropdown-item') != -1)
        {
            dropdownbool = true;
        }
        else
        {
            dropdownbool = false;
        }
        if (dropdownbool === true)
            $('.dropdown-menu').show();
        else
            $('.dropdown-menu').hide();
    });
    let booltoggler = false;
    $('.navbar-toggler').click(function () {
        booltoggler = !booltoggler;
        $('.navbar-collapse').slideToggle();
        $('.navbar-collapse').css('display', 'flex');
    });
});