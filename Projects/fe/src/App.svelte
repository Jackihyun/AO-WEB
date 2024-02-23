<script>
  import { Router, Route } from "svelte-routing";
  import NewmainPage from "./pages/newmainPage.svelte";
  import ArchivePage from "./pages/archivePage.svelte";
  import ApplyPage from "./pages/applyPage.svelte";
  import AboutAOPage from "./pages/aboutAoPage.svelte";
  import ContactPage from "./pages/contactPage.svelte";
  import "./App.css";
  // import Modal from "./components/completeModal.svelte";

  let showModal = true;
</script>

<Router>
  <Route path="/" component={NewmainPage} />
  <Route path="/archive" component={ArchivePage} />
  <Route path="/about" component={AboutAOPage} />
  <Route path="/contact" component={ContactPage} />

  <Route path="/apply" component={ApplyPage} />
</Router>
