<script>
  import { Router, Route } from "svelte-routing";
  import MainPage from "./pages/mainPage.svelte";
  import ApplyPage from "./pages/applyPage.svelte";
  import ArchivePage from "./pages/archivePage.svelte";
  import "./App.css";
  import NewmainPage from "./pages/newmainPage.svelte";
  // import Modal from "./components/completeModal.svelte";

  let showModal = true;
</script>

<Router>
  <Route path="/" component={NewmainPage} />
  <!-- <Route path="/newmain" component={NewmainPage} /> -->
  <Route path="/archive" component={ArchivePage} />
  <!-- <Route path="/about" component={AboutPage} /> -->
  <!-- <Route path="/contact" component={ContactPage} /> -->

  <!-- <Route path="/" component={MainPage} /> -->
  <Route path="/apply" component={ApplyPage} />
  <!-- <Route path="/mainPage" component={MainPage} /> -->
</Router>
