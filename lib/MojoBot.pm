package MojoBot;
use Mojo::Base 'Mojolicious';
use MyUsers;


sub startup {

  my $self = shift; 

  # Make signed cookies secure
  $self->secret('Mojolicious rocks');

   my $users = MyUsers->new;
  $self->helper(users => sub { return $users });

  #Router
  my $r = $self->routes;

  $r->any('/')->to('display#index')->name('index');
  $r->any('/login')->to('login#login')->name('login');
  $r->get('/protected')->to('login#protected')->name('protected');
  $r->get('/logout')->to('login#logout')->name('logout')
}

1;
