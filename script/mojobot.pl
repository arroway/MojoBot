#! /usr/bin/env perl

use File::Basename 'dirname';
use File::Spec;

use lib join '/', File::Spec->splitdir(dirname(__FILE__)), 'lib';
use lib join '/', File::Spec->splitdir(dirname(__FILE__)), '..', 'lib';

# Check if Mojolicious is installed
die <<EOF unless eval 'use Mojolicious::Commands; 1';
It Looks like you don't have the Mojolicious framework installed.
Please visit http://mojolicio.us for detailed installation instructions.

EOF

# Application
$ENV{MOJO_APP} ||= 'MojoBot';

# Start commands
Mojolicious::Commands->start;
