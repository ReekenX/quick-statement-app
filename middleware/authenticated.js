export default function({ store, redirect }) {
  // If the user is not authenticated - redirect to index
  if (!store.state.authorized) {
    return redirect('/')
  }
}
