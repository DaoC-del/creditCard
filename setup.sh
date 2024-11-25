#!/bin/bash

# 安装 SDKMAN
curl -s "https://get.sdkman.io" | bash
source "$HOME/.sdkman/bin/sdkman-init.sh"

# 安装 Maven
sdk install maven

# 安装 Spring Boot CLI
sdk install springboot

echo "SDKMAN, Maven, and Spring Boot have been installed successfully."
