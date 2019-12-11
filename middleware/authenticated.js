export default function({ store, redirect }) {
  // If the user is not authenticated - redirect to index
  if (!store.state.authenticated) {
    return redirect('/')
  }
}
