.no-js {
    @include breakpoint(small only) {
      .top-bar {
        display: none;
      }
    }
  
    @include breakpoint(medium) {
      .title-bar {
        display: none;
      }
    }
  }