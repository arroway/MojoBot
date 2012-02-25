package MyUsers;

use strict;
use warnings;

my $USERS = { 
    arroway    => 'admin',
};

sub new { bless{}, shift }

sub check{
  my ($self, $user, $pass) = @_; 

  #Success
  return 1 if $USERS->{$user} && $USERS->{$user} eq $pass;

  #Fail
  return;
}
      
1;
