package MojoBot::Display;
use Mojo::Base 'Mojolicious::Controller';
use DBI qw(:sql_types);
use HTML::Table::FromDatabase;

sub index{
  my $self = shift;
 
  
  my $args = "DBI:SQLite:dbname=/Users/stephanie/dev/perl_newb/LolBot/:data.db";
  my $db = DBI->connect($args,"", "", 
  { RaiseError => 1, AutoCommit => 1, sqlite_unicode => 1 } ) or die $DBI::errstr;
  my $query = $db->prepare( "SELECT * FROM nicknames" );
  $query->execute();
  
  my $t = HTML::Table::FromDatabase->new( -sth => $query, -border => 1 );
  my $table = $t->getTable();
  $self->stash( table => $table );
  # $self->render( 'index' );
  
#my $all = $db->selectall_arrayref("SELECT * FROM nicknames");

  #foreach my $row (@$all) {
  #  my ($id, $first, $last) = @$row;
  #  print "$id|$first|$last";
  #}
}

sub display_log_per_user{}

sub display_lol_podium{}

sub display_question_winner{}

sub display_capslock_winner{}


1;
