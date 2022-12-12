{
  description = "Hacker Sundae Monorepo";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {

        devShell = pkgs.mkShell {
          buildInputs = with pkgs; [
            yarn
            yarn-bash-completion
            nodejs-18_x
            nixpkgs-fmt
          ];

          shellHook = ''
            PS1="[\[\033[32m\]\w]\[\033[0m\]\n\[\033[1;36m\]\u\[\033[1;33m\]-> \[\033[0m\]"
            echo "Hacker Sundae Shell"
          '';
        };

      });
}
