<script>
  import { Router, Route } from "svelte-routing";
  import MainPage from "./pages/mainPage.svelte";
  import ApplyPage from "./pages/applyPage.svelte";
  import MenuPage from "./pages/menuPage.svelte";
  import AboutAoPage from "./pages/aboutAoPage.svelte";
  import ContactPage from "./pages/contactPage.svelte";
  import "./App.css";
  // import Modal from "./components/completeModal.svelte";

  let showModal = true;
</script>

<Router>
  <Route path="/" component={ContactPage} />
  <Route path="/applyPage" component={ApplyPage} />
  <Route path="/mainPage" component={MainPage} />
  <Route path="/menuPage" component={MenuPage}/>
  <Route path="/aboutAoPage" component={AboutAoPage}/>
  <Route path="/contactPage" component={ContactPage}/>
</Router>
