package MojoBot::Tree;
use Mojo::Base 'Mojolicious::Controller';
use JSON;
use DBI;
use DBI qw(:sql_types);

sub query {
  my $self = shift;
  my $attribute = shift;

  my $args = "DBI:SQLite:dbname=/home/stephanie/Documents/LolBot/:data.db";
  my $db = DBI->connect($args, "", "", { RaiseError => 1, AutoCommit => 1 }) or die $DBI::errstr;

  my $query = qq{ SELECT name, $attribute FROM nicknames };
  my $sth = $db->prepare( $query );
  $sth->execute();

  my %json_hash;
  $json_hash{'color'} = ['#FF0000'];
  $json_hash{'label'} = ['capslock'];
  
  my @list;
  my $row;
  while ($row = $sth->fetchrow_arrayref()) {
    my %values;
    $values{'label'} = @$row[0]; 
    $values{'values'} = @$row[1]; 
    push(@list, \%values);
  }

  $json_hash{'values'} = \@list;
 
  #return json
  my $json_text = to_json(\%json_hash);
  return $json_text;  
}


sub capslock {
  my $self = shift;
  my $json_text = $self->query('capslock');
  return $self->render(json => $json_text); 
}

sub facepalm {
  my $self = shift;
  my $json_text = $self->query('facepalm');
  return $self->render(json => $json_text); 
}

sub interrogative {
  my $self = shift;
  my $json_text = $self->query('interrogative');
  return $self->render(json => $json_text); 
}

sub lol {
  my $self = shift;
  my $json_text = $self->query('lol');
  return $self->render(json => $json_text); 
}

sub log {
  my $self = shift;
  my $json_text = $self->query('log');
  return $self->render(json => $json_text); 
}

sub osef {
  my $self = shift;
  my $json_text = $self->query('osef');
  return $self->render(json => $json_text); 
}

sub sad {
  my $self = shift;
  my $json_text = $self->query('sad');
  return $self->render(json => $json_text); 
}

sub happy {
  my $self = shift;
  my $json_text = $self->query('happy');
  return $self->render(json => $json_text); 
}

sub amazed {
  my $self = shift;
  my $json_text = $self->query('amazed');
  return $self->render(json => $json_text); 
}

sub confused {
  my $self = shift;
  my $json_text = $self->query('confused');
  return $self->render(json => $json_text); 
}

sub fpga {
  my $self = shift;
  my $json_text = $self->query('fpga');
  return $self->render(json => $json_text); 
}

sub win {
  my $self = shift;
  my $json_text = $self->query('win');
  return $self->render(json => $json_text); 
}

sub demoralized {
  my $self = shift;
  my $json_text = $self->query('demoralized');
  return $self->render(json => $json_text); 
}

sub rage {
  my $self = shift;
  my $json_text = $self->query('rage');
  return $self->render(json => $json_text); 
}

1;
