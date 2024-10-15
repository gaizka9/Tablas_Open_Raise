const navbar = document.querySelector('body');

navbar.innerHTML = `
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid justify-content-center"> <!-- Añadimos 'justify-content-center' -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="/Tablas_Open_Raise/index.html">RFI</a>
      </li>
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            3BET
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/Tablas_Open_Raise/html/3bet/3bUTG.html">vs UTG</a></li>
            <li><a class="dropdown-item" href="/Tablas_Open_Raise/html/3bet/3bUTG1.html">vs UTG+1</a></li>
            <li><a class="dropdown-item" href="/Tablas_Open_Raise/html/3bet/3bMP.html">vs MP</a></li>
            <li><a class="dropdown-item" href="/Tablas_Open_Raise/html/3bet/3bMP1.html">vs MP+1</a></li>
            <li><a class="dropdown-item" href="/Tablas_Open_Raise/html/3bet/3bHJ.html">vs HJ</a></li>
            <li><a class="dropdown-item" href="/Tablas_Open_Raise/html/3bet/3bCO.html">vs CO</a></li>
            <li><a class="dropdown-item" href="/Tablas_Open_Raise/html/3bet/3bBTN.html">vs BTN</a></li>
            <li><a class="dropdown-item" href="/Tablas_Open_Raise/html/3bet/3bSB.html">vs SB</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            4BET
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/Tablas_Open_Raise/html/4bet/4bUTG.html">UTG vs</a></li>
            <li><a class="dropdown-item" href="/Tablas_Open_Raise/html/4bet/4bUTG1.html">UTG+1 vs</a></li>
            <li><a class="dropdown-item" href="/Tablas_Open_Raise/html/4bet/4bMP.html">MP vs</a></li>
            <li><a class="dropdown-item" href="/Tablas_Open_Raise/html/4bet/4bMP1.html">MP+1 vs</a></li>
            <li><a class="dropdown-item" href="/Tablas_Open_Raise/html/4bet/4bHJ.html">HJ vs</a></li>
            <li><a class="dropdown-item" href="/Tablas_Open_Raise/html/4bet/4bCO.html">CO vs</a></li>
            <li><a class="dropdown-item" href="/Tablas_Open_Raise/html/4bet/4bBTN.html">BTN vs</a></li>
            <li><a class="dropdown-item" href="/Tablas_Open_Raise/html/4bet/4bSB.html">SB vs</a></li>
          </ul>
        </li>
    </ul>
  </div>
</nav>`;
