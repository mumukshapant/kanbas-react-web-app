function Home() {

return `<div> <!--kanbas nav-->
<ul class="kanbas-navigation" style="height: 100%;">


    <li>
        <img src="/NU Logo.png" style="height: 58px; width: 58px;">
    </li>

    <li>

        <a href="/Kanbas/Account/Profile/screen.html"> <i class="fa fa-user fa-2x" aria-hidden="true"
                style="display: block; margin: 0 auto;"></i>Account</a>
    </li>


    <li>



        <a href="/Kanbas/Dashboard/dashboard.html"> <i class="fa fa-window-maximize fa-2x"
                aria-hidden="true" style="display: block; margin: 0 auto;"></i> Dashboard </a>
    </li>



    <li class="wd-active">
        <a href="/Kanbas/Courses/Home/screen.html" class="wd-active"> <i class="fa fa-book fa-2x"
                aria-hidden="true" style="display: block; margin: 0 auto;"></i>
            Courses </a>
    </li>


    <li>
        <a href="#"><i class="fa fa-calendar fa-2x" aria-hidden="true"
                style="display: block; margin: 0 auto;"></i>Calendar</a>
    </li>



    <li>

        <a href="#"><i class="fa fa-inbox fa-2x" aria-hidden="true"
                style="display: block; margin: 0 auto;"></i> Inbox </a>
    </li>


    <li>
        <a href="#"> <i class="fa fa-undo fa-2x" aria-hidden="true"
                style="display: block; margin: 0 auto;"></i>
            History </a>
    </li>


    <li>

        <a href="#"><i class="fa fa-window-restore fa-2x" aria-hidden="true"
                style="display: block; margin: 0 auto;"></i>
            Studio</a>
    </li>

    <li>

        <a href="#"> <i class="fa fa-question fa-2x" aria-hidden="true"
                style="display: block; margin: 0 auto;"></i>
            Help </a>
    </li>


</ul>

</div> <!--kanbas navbar close-->

`
};

export default Home;