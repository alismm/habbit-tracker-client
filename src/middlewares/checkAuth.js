export default function checkAuth(to, from, next, isProtected) {
  if (!isProtected) {
    next();
    return;
  } 
  else {
    next("/login")
  }
}
