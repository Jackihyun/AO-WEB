<script>
  import { Router, Route } from "svelte-routing";
  import MainPage from "./pages/mainPage.svelte";
  import ApplyPage from "./pages/applyPage.svelte";
  import "./App.css";
  // import Modal from "./components/completeModal.svelte";

  let showModal = true;
</script>

<Router>
  <Route path="/ao" component={MainPage} />
  <Route path="/ao/applyPage" component={ApplyPage} />
  <Route path="/ao/mainPage" component={MainPage} />
</Router>
