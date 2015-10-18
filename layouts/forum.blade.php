<?php
/**
 * Forum Client Template
 */
?>
<div id="app" class="App">

  <div id="app-navigation" class="App-navigation"></div>

  <div id="drawer" class="App-drawer">

    <header id="header" class="App-header">
      <div id="header-navigation" class="Header-navigation"></div>
      <div class="container">
        <h1 class="Header-title">
          <a href="{{ $forum->attributes->baseUrl }}" id="home-link">
            Themer
          </a>
        </h1>
        <div id="header-primary" class="Header-primary"></div>
        <div id="header-secondary" class="Header-secondary"></div>
      </div>
    </header>

  </div>

  <main class="App-content">
    <div id="content"></div>

    {!! $content !!}

    <div class="App-composer">
      <div class="container">
        <div id="composer"></div>
      </div>
    </div>
  </main>

</div>
