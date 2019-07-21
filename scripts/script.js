$(document).ready(function () {
    //navbar
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
    //modals
    $('.btn-modal').click(function () {
        let modalId = $(this).data("target");
        $(modalId).modal("show")
    });
    $('.popin-dismiss').click(function () {
        $(this).closest('.modal').modal("hide");
    });
    $(document).keyup(function (e) {
        if (e.keyCode === 27)
        {
            let key = searchOpenModal();
        }
    });
    $.fn.modal = function(action) {
        if (action === "show")
        {
            $(this).css('display', 'block');
            $(this).fadeTo(0,0);
            $(this).fadeTo('100', 1);
        }
        if (action === "hide")
        {
            $(this).css('display', 'none');
        }
    };
    $(document).click(function (e) {
        if ($(e.target).attr('class') === 'modal')
        {
            $(e.target).modal('hide');
        }
    });
    function searchOpenModal() {
        $('.modal').each(function (key, data) {
            if ($($('.modal')[key]).css('display') == 'block')
            {
                $($('.modal')[key]).modal('hide');
            }
        });
    }
});