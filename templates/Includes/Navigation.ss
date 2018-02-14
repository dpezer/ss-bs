<ul class="navbar-nav mr-auto">
  <% loop $Menu(1) %>
  <li class="nav-item <% if $LinkingMode == 'current' %>active<% end_if %>">
    <a class="nav-link" href="$Link">$MenuTitle.XML</a>
  </li>
  <% end_loop %>
</ul>