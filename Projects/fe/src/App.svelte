<script>
  import { Router, Route } from "svelte-routing";
  import MainPage from "./pages/mainPage.svelte";
  import ApplyPage from "./pages/applyPage.svelte";
  import "./App.css";
  // import Modal from "./components/completeModal.svelte";

  let showModal = true;
</script>

<Router basepath="/ao">
  <Route path="/" component={MainPage} />
  <Route path="/applyPage" component={ApplyPage} />
  <Route path="/mainPage" component={MainPage} />
</Router>
