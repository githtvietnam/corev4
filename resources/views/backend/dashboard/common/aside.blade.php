<nav class="pcoded-navbar">
   <div class="pcoded-inner-navbar main-menu">
        <div class="pcoded-navigatio-lavel">Navigation</div>
        <ul class="pcoded-item pcoded-left-item">
           <li class="pcoded-trigger">
                <a href="javascript:void(0)">
                    <span class="pcoded-micon"><i class="feather icon-home"></i></span>
                    <span class="pcoded-mtext">Dashboard</span>
                </a>
           </li>
           <li class="pcoded-hasmenu active pcoded-trigger">
                <a href="javascript:void(0)">
                    <span class="pcoded-micon"><i class="feather icon-sidebar"></i></span>
                    <span class="pcoded-mtext">QL Bài Viết</span>
                </a>
                <ul class="pcoded-submenu">
                    <li class="active">
                       <a href="{{ route('post.catalogue.index') }}">
                           <span class="pcoded-mtext">QL Nhóm Bài Viết</span>
                       </a>
                    </li>
                </ul>
           </li>
        </ul>
   </div>
</nav>
