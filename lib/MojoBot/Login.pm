package MojoBot::Login;
use Mojo::Base 'Mojolicious::Controller';

sub login {
    my $self = shift;

    # Query or POST parameters
    my $user = $self->param('user') || '';
    my $pass = $self->param('pass') || '';

    # Check password and render "login.html.ep" if necessary
    return $self->render unless $self->users->check($user, $pass);
  
    # Store username in session
    $self->session(user => $user);

    # Store a friendly message for the next page in flash
    $self->flash(message => 'Thanks for logging in.');

    # Redirect to protected page with a 302 response 
    $self->redirect_to('protected');
}

# A protected page auto rendering "protected.html.ep"
sub protected {
    my $self = shift;

    # Redirect to main page with a 302 response if user is not logged in
    return $self->redirect_to('login') unless $self->session('user');
}

# Logout action
sub logout  {
    my $self = shift;

    # Expire and in turn clear session automatically
    $self->session(expires => 1);

    # Redirect to main page with a 302 response
    $self->redirect_to('index');
}

1;
