// -----------------------------------------------------
// Update the project's package.json to run our install script when their
// install runs
// -----------------------------------------------------
require( "./lib/hooks" )( "install" );

require( "child_process" )
	.exec( "node ../lib/svn-npm-crutch.js", {
		cwd: __dirname
	});
