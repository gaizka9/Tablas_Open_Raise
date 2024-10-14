const navbar = document.querySelector('body');

navbar.innerHTML = `
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid justify-content-center"> <!-- Añadimos 'justify-content-center' -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="/tablasRangos/index.html">RFI</a>
      </li>
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            3BET
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/tablasRangos/html/3bUTG.html">vs UTG</a></li>
            <li><a class="dropdown-item" href="/tablasRangos/html/3bUTG1.html">vs UTG+1</a></li>
            <li><a class="dropdown-item" href="/tablasRangos/html/3bMP.html">vs MP</a></li>
            <li><a class="dropdown-item" href="/tablasRangos/html/3bMP1.html">vs MP+1</a></li>
            <li><a class="dropdown-item" href="/tablasRangos/html/3bHJ.html">vs HJ</a></li>
            <li><a class="dropdown-item" href="/tablasRangos/html/3bCO.html">vs CO</a></li>
            <li><a class="dropdown-item" href="/tablasRangos/html/3bBTN.html">vs BTN</a></li>
            <li><a class="dropdown-item" href="/tablasRangos/html/3bSB.html">vs SB</a></li>
          </ul>
        </li>
    </ul>
  </div>
</nav>`;
