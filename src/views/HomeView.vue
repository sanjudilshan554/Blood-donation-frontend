<template>
  <head>
    <title>home page</title>

    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
  </head>

  <link
    href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    rel="stylesheet"
    id="bootstrap-css"
  />

  <nav class="navbar navbar-expand-lg navbar-black bg-LIGHT card">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="navtitle pr-5"><b>BLOOD</b> donation</div>

      <a href="/createPost" class="new">Find Donater</a>
      <a href="/learns" class="new">View time line</a>
      <a href="/kuppiRequest" class="new">Create post</a>

      <div class="bs">
        <a href="/user/profile">
          <button
            class="btn btn-success "
            type="button"
            data-mdb-ripple-color="dark"
          >
            Accepterd( )
          </button></a
        >
        <a href="/user/profile">
          <button
            class="btn btn-danger "
            type="button"
            data-mdb-ripple-color="dark"
          >
            Requested( )
          </button></a
        >
      </div>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>

        <form class="d-flex input-group w-auto">
          <a href="/userProfile">
            <button
              class="btn btn-white"
              type="button"
             
            >
              user Profile
            </button></a
          >

          <button
            @click="logout()"
            class="btn btn-outline-danger"
            type="button"
            data-mdb-ripple-color="dark"
          >
            Logout
          </button>
        </form>
      </div>
    </div>

    <header
      class="w3-display-container w3-content w3-wide"
      style="max-width: 15000px"
      id="home"
    >
      <div class="d-block w-120">
        <div class="slid">
          <div id="slider">
            <figure>
              <!-- <img class="d-block w-500" src="@/assets/a1 (4).jpg" />
                <img class="d-block w-500" src="@/assets/a1 (8).jpg" /> -->

              <!-- <img class="d-block w-500" src="@/assets/a1 (1).jpg" /> -->

              <img class="d-block w-500" src="@/assets/cover1.jpg" />
              <img class="d-block w-500" src="@/assets/cover2.jpg" />
              <!--  <img class="d-block w-500" src="@/assets/cover6.jpg" />
                   <img class="d-block w-500" src="@/assets/cover7.jpg" /> -->
            </figure>
          </div>
        </div>
      </div>

      <div class="w3-display-middle w3-margin-top w3-center">
        <h1 class="w3-xxlarge w3-text-white">
          <span class="w3-padding w3-blue w3-opacity-min"><b>BLOOD</b></span>
          <span class="w3-hide-small w3-text-light-grey">DONATION</span>
        </h1>
      </div>
    </header>
  </nav>
  <!-- Header -->

  <!------ Include the above in your HEAD tag ---------->

  <!-- Team -->
  <section id="team" class="pb-5">
    <div class="container">
      <h5 class="section-title h1">OUR TEAM</h5>
      <div class="row">
        <!-- Team member -->
        <div class="col-xs-12 col-sm-6 col-md-4">
          <div class="image-flip">
            <div class="mainflip flip-0">
              <div class="frontside">
                <div class="card">
                  <div class="card-body text-center">
                    <p>
                      <img
                        class="img-fluid"
                        src="@/assets/cover1.jpg"
                        alt="card image"
                      />
                    </p>
                    <h4 class="card-title">Head Office</h4>
                    <p class="card-text">Get the head office details</p>
                    <a
                      href="https://www.fiverr.com/share/qb8D02"
                      class="btn btn-primary btn-sm"
                      ><i class="fa fa-plus"></i
                    ></a>
                  </div>
                </div>
              </div>
              <div class="backside">
                <div class="card">
                  <div class="card-body text-center mt-4">
                    <h4 class="card-title">Head Office Branch</h4>
                    <p class="card-text">
                      You can contact any time with our head office so please
                      put email to balow address or contact us immediately
                    </p>
                    <ul class="list-inline">
                      <li class="list-inline-item">
                        <a
                          class="social-icon text-xs-center"
                          target="_blank"
                          href="https://www.fiverr.com/share/qb8D02"
                        >
                          <i class="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a
                          class="social-icon text-xs-center"
                          target="_blank"
                          href="https://www.fiverr.com/share/qb8D02"
                        >
                          <i class="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a
                          class="social-icon text-xs-center"
                          target="_blank"
                          href="https://www.fiverr.com/share/qb8D02"
                        >
                          <i class="fa fa-skype"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a
                          class="social-icon text-xs-center"
                          target="_blank"
                          href="https://www.fiverr.com/share/qb8D02"
                        >
                          <i class="fa fa-google"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ./Team member -->
        <!-- Team member -->
        <div class="col-xs-12 col-sm-6 col-md-4">
          <div
            class="image-flip"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div class="mainflip">
              <div class="frontside">
                <div class="card">
                  <div class="card-body text-center">
                    <p>
                      <img
                        class="img-fluid"
                        src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_02.png"
                        alt="card image"
                      />
                    </p>
                    <h4 class="card-title">Sunlimetech</h4>
                    <p class="card-text">
                      This is basic card with image on top, title, description
                      and button.
                    </p>
                    <a
                      href="https://www.fiverr.com/share/qb8D02"
                      class="btn btn-primary btn-sm"
                      ><i class="fa fa-plus"></i
                    ></a>
                  </div>
                </div>
              </div>
              <div class="backside">
                <div class="card">
                  <div class="card-body text-center mt-4">
                    <h4 class="card-title">Sunlimetech</h4>
                    <p class="card-text">
                      This is basic card with image on top, title, description
                      and button.This is basic card with image on top, title,
                      description and button.This is basic card with image on
                      top, title, description and button.
                    </p>
                    <ul class="list-inline">
                      <li class="list-inline-item">
                        <a
                          class="social-icon text-xs-center"
                          target="_blank"
                          href="https://www.fiverr.com/share/qb8D02"
                        >
                          <i class="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a
                          class="social-icon text-xs-center"
                          target="_blank"
                          href="https://www.fiverr.com/share/qb8D02"
                        >
                          <i class="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a
                          class="social-icon text-xs-center"
                          target="_blank"
                          href="https://www.fiverr.com/share/qb8D02"
                        >
                          <i class="fa fa-skype"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a
                          class="social-icon text-xs-center"
                          target="_blank"
                          href="https://www.fiverr.com/share/qb8D02"
                        >
                          <i class="fa fa-google"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ./Team member -->
        <!-- Team member -->
        <div class="col-xs-12 col-sm-6 col-md-4">
          <div
            class="image-flip"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div class="mainflip">
              <div class="frontside">
                <div class="card">
                  <div class="card-body text-center">
                    <p>
                      <img
                        class="img-fluid"
                        src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_03.png"
                        alt="card image"
                      />
                    </p>
                    <h4 class="card-title">Sunlimetech</h4>
                    <p class="card-text">
                      This is basic card with image on top, title, description
                      and button.
                    </p>
                    <a
                      href="https://www.fiverr.com/share/qb8D02"
                      class="btn btn-primary btn-sm"
                      ><i class="fa fa-plus"></i
                    ></a>
                  </div>
                </div>
              </div>
              <div class="backside">
                <div class="card">
                  <div class="card-body text-center mt-4">
                    <h4 class="card-title">Sunlimetech</h4>
                    <p class="card-text">
                      This is basic card with image on top, title, description
                      and button.This is basic card with image on top, title,
                      description and button.This is basic card with image on
                      top, title, description and button.
                    </p>
                    <ul class="list-inline">
                      <li class="list-inline-item">
                        <a
                          class="social-icon text-xs-center"
                          target="_blank"
                          href="https://www.fiverr.com/share/qb8D02"
                        >
                          <i class="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a
                          class="social-icon text-xs-center"
                          target="_blank"
                          href="https://www.fiverr.com/share/qb8D02"
                        >
                          <i class="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a
                          class="social-icon text-xs-center"
                          target="_blank"
                          href="https://www.fiverr.com/share/qb8D02"
                        >
                          <i class="fa fa-skype"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a
                          class="social-icon text-xs-center"
                          target="_blank"
                          href="https://www.fiverr.com/share/qb8D02"
                        >
                          <i class="fa fa-google"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ./Team member -->
        <!-- Team member -->
        <div class="col-xs-12 col-sm-6 col-md-4">
          <div
            class="image-flip"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div class="mainflip">
              <div class="frontside">
                <div class="card">
                  <div class="card-body text-center">
                    <p>
                      <img
                        class="img-fluid"
                        src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_04.jpg"
                        alt="card image"
                      />
                    </p>
                    <h4 class="card-title">Sunlimetech</h4>
                    <p class="card-text">
                      This is basic card with image on top, title, description
                      and button.
                    </p>
                    <a
                      href="https://www.fiverr.com/share/qb8D02"
                      class="btn btn-primary btn-sm"
                      ><i class="fa fa-plus"></i
                    ></a>
                  </div>
                </div>
              </div>
              <div class="backside">
                <div class="card">
                  <div class="card-body text-center mt-4">
                    <h4 class="card-title">Sunlimetech</h4>
                    <p class="card-text">
                      This is basic card with image on top, title, description
                      and button.This is basic card with image on top, title,
                      description and button.This is basic card with image on
                      top, title, description and button.
                    </p>
                    <ul class="list-inline">
                      <li class="list-inline-item">
                        <a
                          class="social-icon text-xs-center"
                          target="_blank"
                          href="https://www.fiverr.com/share/qb8D02"
                        >
                          <i class="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a
                          class="social-icon text-xs-center"
                          target="_blank"
                          href="https://www.fiverr.com/share/qb8D02"
                        >
                          <i class="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a
                          class="social-icon text-xs-center"
                          target="_blank"
                          href="https://www.fiverr.com/share/qb8D02"
                        >
                          <i class="fa fa-skype"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a
                          class="social-icon text-xs-center"
                          target="_blank"
                          href="https://www.fiverr.com/share/qb8D02"
                        >
                          <i class="fa fa-google"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ./Team member -->
        <!-- Team member -->
        <div class="col-xs-12 col-sm-6 col-md-4">
          <div
            class="image-flip"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div class="mainflip">
              <div class="frontside">
                <div class="card">
                  <div class="card-body text-center">
                    <p>
                      <img
                        class="img-fluid"
                        src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_05.png"
                        alt="card image"
                      />
                    </p>
                    <h4 class="card-title">Sunlimetech</h4>
                    <p class="card-text">
                      This is basic card with image on top, title, description
                      and button.
                    </p>
                    <a
                      href="https://www.fiverr.com/share/qb8D02"
                      class="btn btn-primary btn-sm"
                      ><i class="fa fa-plus"></i
                    ></a>
                  </div>
                </div>
              </div>
              <div class="backside">
                <div class="card">
                  <div class="card-body text-center mt-4">
                    <h4 class="card-title">Sunlimetech</h4>
                    <p class="card-text">
                      This is basic card with image on top, title, description
                      and button.This is basic card with image on top, title,
                      description and button.This is basic card with image on
                      top, title, description and button.
                    </p>
                    <ul class="list-inline">
                      <li class="list-inline-item">
                        <a
                          class="social-icon text-xs-center"
                          target="_blank"
                          href="https://www.fiverr.com/share/qb8D02"
                        >
                          <i class="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a
                          class="social-icon text-xs-center"
                          target="_blank"
                          href="https://www.fiverr.com/share/qb8D02"
                        >
                          <i class="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a
                          class="social-icon text-xs-center"
                          target="_blank"
                          href="https://www.fiverr.com/share/qb8D02"
                        >
                          <i class="fa fa-skype"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a
                          class="social-icon text-xs-center"
                          target="_blank"
                          href="https://www.fiverr.com/share/qb8D02"
                        >
                          <i class="fa fa-google"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ./Team member -->
        <!-- Team member -->
        <div class="col-xs-12 col-sm-6 col-md-4">
          <div
            class="image-flip"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div class="mainflip">
              <div class="frontside">
                <div class="card">
                  <div class="card-body text-center">
                    <p>
                      <img
                        class="img-fluid"
                        src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_06.jpg"
                        alt="card image"
                      />
                    </p>
                    <h4 class="card-title">Sunlimetech</h4>
                    <p class="card-text">
                      This is basic card with image on top, title, description
                      and button.
                    </p>
                    <a
                      href="https://www.fiverr.com/share/qb8D02"
                      class="btn btn-primary btn-sm"
                      ><i class="fa fa-plus"></i
                    ></a>
                  </div>
                </div>
              </div>
              <div class="backside">
                <div class="card">
                  <div class="card-body text-center mt-4">
                    <h4 class="card-title">Sunlimetech</h4>
                    <p class="card-text">
                      This is basic card with image on top, title, description
                      and button.This is basic card with image on top, title,
                      description and button.This is basic card with image on
                      top, title, description and button.
                    </p>
                    <ul class="list-inline">
                      <li class="list-inline-item">
                        <a
                          class="social-icon text-xs-center"
                          target="_blank"
                          href="https://www.fiverr.com/share/qb8D02"
                        >
                          <i class="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a
                          class="social-icon text-xs-center"
                          target="_blank"
                          href="https://www.fiverr.com/share/qb8D02"
                        >
                          <i class="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a
                          class="social-icon text-xs-center"
                          target="_blank"
                          href="https://www.fiverr.com/share/qb8D02"
                        >
                          <i class="fa fa-skype"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a
                          class="social-icon text-xs-center"
                          target="_blank"
                          href="https://www.fiverr.com/share/qb8D02"
                        >
                          <i class="fa fa-google"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ./Team member -->
      </div>
    </div>
  </section>

  <!-- About Section -->
  <div class="w3-container w3-padding-32" id="about">
    <div class="hello">
      <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">
        <h5 class="name-profession card-title">About</h5>
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt
        in culpa qui officia deserunt mollit anim id est laborum consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  </div>

  <!-- Footer -->

  <footer class="w3-center w3-black w3-padding-16">
    <p>Dccreation</p>
  </footer>

  <!-- Team -->
</template>
<script></script>
<style scoped>
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
#team {
  background: #eee !important;
}

.btn-primary:hover,
.btn-primary:focus {
  background-color: #108d6f;
  border-color: #108d6f;
  box-shadow: none;
  outline: none;
}

.btn-primary {
  color: #fff;
  background-color: #007b5e;
  border-color: #007b5e;
}

section {
  padding: 60px 0;
}

section .section-title {
  text-align: center;
  color: #007b5e;
  margin-bottom: 50px;
  text-transform: uppercase;
}

#team .card {
  border: none;
  background: #ffffff;
}

.image-flip:hover .backside,
.image-flip.hover .backside {
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
  -o-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  transform: rotateY(0deg);
  border-radius: 0.25rem;
}

.image-flip:hover .frontside,
.image-flip.hover .frontside {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.mainflip {
  -webkit-transition: 1s;
  -webkit-transform-style: preserve-3d;
  -ms-transition: 1s;
  -moz-transition: 1s;
  -moz-transform: perspective(1000px);
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transition: 1s;
  transform-style: preserve-3d;
  position: relative;
}

.frontside {
  position: relative;
  -webkit-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  z-index: 2;
  margin-bottom: 30px;
}

.backside {
  position: absolute;
  top: 0;
  left: 0;
  background: white;
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
  -o-transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  -webkit-box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
  -moz-box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
  box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
}

.frontside,
.backside {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: 1s;
  -webkit-transform-style: preserve-3d;
  -moz-transition: 1s;
  -moz-transform-style: preserve-3d;
  -o-transition: 1s;
  -o-transform-style: preserve-3d;
  -ms-transition: 1s;
  -ms-transform-style: preserve-3d;
  transition: 1s;
  transform-style: preserve-3d;
}

.frontside .card,
.backside .card {
  min-height: 312px;
}

.backside .card a {
  font-size: 18px;
  color: #007b5e !important;
}

.frontside .card .card-title,
.backside .card .card-title {
  color: #007b5e !important;
}

.frontside .card .card-body img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

#slider {
  overflow: hidden;
}
#slider figure {
  position: relative;
  width: 500%;
  margin: 0;
  animation: 60s slider infinite;
}
#slider figure img {
  width: 20%;
  float: left;
}

.slider {
  width: 150px;
  margin-left: 200px;
}
@keyframes slider {
  0% {
    left: -0%;
  }
  50% {
    left: -0%;
  }
  75% {
    left: -100%;
  }

  100% {
    left: -0%;
  }
}

.card {
  padding: 0;
}
.card-wrapper {
}

@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;1,500&display=swap");

.card {
  padding: 0;
}
.card-wrapper {
}

.button {
  background: rgba(0, 0, 0, 0.056);

  align-items: center;
  border-radius: 100px;
  padding: 8px 8px;
  border: none;
  outline: none;
  justify-content: space-around;
}

.button .buttons {
  padding-left: 35%;
  justify-self: unset;
  justify-items: center;
}

.button .buttons:hover {
  color: rgb(245, 242, 242);
}
.button:hover {
  background-color: rgba(116, 89, 89, 0.392);
  transition: 0.5s;
}

.hello {
  text-align: center;
}

.new {
  align-items: center;
  color: rgb(5, 5, 5);
  padding-top: 5px;
  padding: 10px;
  background-position: center center;
  background-color: white;
}
.news {
  align-items: center;
  color: rgb(75, 66, 66);
  padding-top: 5px;
  padding: 10px;
  background-position: center center;
}
.new:hover {
  position: relative;
  transition: 200ms;
  background-color: #333;
  color:#eee;

}

.news:hover {
  background-color: rgba(21, 121, 209, 0.492);
  position: relative;
  transition: 200ms;
}

.card {
  box-shadow: 10cap;
  border-radius: 0px 0px 0px 0px;
  box-shadow: 0 2px 4px 0 rgba(136, 144, 195, 0.2),
    0 5px 15px 0 rgba(37, 44, 97, 0.15);
}

a {
  background-color: #333;
  color: #0142f6;
  text-align: center;
  text-decoration: none;
  transition: all 0.5s ease-out;
}

a:hover,
a:focus {
  background-color: #222121;
  color: #ede6e6;
}
html {
  background-color: rgb(250, 244, 244);
  color: #333;
}
a{
  border-radius: 15px;
  background-color: #f6ebeb;
}
.navtitle {
  color: rgb(255, 0, 0);
}

body {
  background-color: #f9ffe8;
}

section {
  background-color: rgb(241, 229, 194);
}

.bs {
padding-left: 25vh;
text-align: center;
justify-content: center;
align-items: center;
}
</style>
