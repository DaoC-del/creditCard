# 使用基础镜像
FROM mcr.microsoft.com/vscode/devcontainers/base:ubuntu-22.04

# 更新软件包并安装基础工具
RUN apt-get update && apt-get install -y \
    curl \
    wget \
    git \
    zip \
    unzip \
    gnupg \
    software-properties-common \
    apt-transport-https \
    ca-certificates \
    lsb-release \
    build-essential \
    && apt-get clean

# 安装 Docker 和 Docker Compose
RUN curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg \
    && echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" > /etc/apt/sources.list.d/docker.list \
    && apt-get update \
    && apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

# 配置用户组以允许非root用户运行 Docker
RUN groupadd docker && usermod -aG docker vscode

# 安装 Node.js 18
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs

# 安装 MySQL 客户端
RUN apt-get update && apt-get install -y mysql-client

# 安装 SDKMAN
RUN curl -s "https://get.sdkman.io" | bash \
    && bash -c "source ~/.sdkman/bin/sdkman-init.sh && sdk install springboot"

# 安装 React（通过 npm）
RUN npm install -g create-react-app

# 清理不必要的文件
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# 容器默认工作目录
WORKDIR /workspace
