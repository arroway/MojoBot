package MojoBot;
use Mojo::Base 'Mojolicious';


sub startup {

  my $self = shift; 
  
  $self->secret('LolBotSecretSecret');

  #Router
  my $r = $self->routes;

  $r->any('/')->to('display#index')->name('index');
  $r->get('/tree/capslock')->to('tree#capslock');
  $r->get('/tree/facepalm')->to('tree#facepalm');
  $r->get('/tree/interrogative')->to('tree#interrogative');
  $r->get('/tree/lol')->to('tree#lol');
  $r->get('/tree/log')->to('tree#log');
  $r->get('/tree/osef')->to('tree#osef');
  $r->get('/tree/sad')->to('tree#sad');
  $r->get('/tree/happy')->to('tree#happy');
  $r->get('/tree/amazed')->to('tree#amazed');
  $r->get('/tree/confused')->to('tree#confused');
  $r->get('/tree/fpga')->to('tree#fpga');
  $r->get('/tree/win')->to('tree#win');
  $r->get('/tree/demoralized')->to('tree#demoralized');
  $r->get('/tree/rage')->to('tree#rage');
}

1;
