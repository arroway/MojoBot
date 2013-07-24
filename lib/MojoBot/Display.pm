package MojoBot::Display;
use Mojo::Base 'Mojolicious::Controller';
use DBI;
use DBI qw(:sql_types);

sub index{
  my $self = shift;

  return $self->render; 
}

1;
