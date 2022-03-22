FROM openjdk:8

ENV ANDROID_HOME /opt/android-sdk/linux

RUN mkdir -p ${ANDROID_HOME} && cd ${ANDROID_HOME} && wget -q https://dl.google.com/android/repository/sdk-tools-linux-3859397.zip -O android_tools.zip &&unzip android_tools.zip && rm android_tools.zip
RUN ls /opt/android-sdk/linux/tools/bin
RUN yes | /opt/android-sdk/linux/tools/bin/sdkmanager --licenses

RUN apt-get update && \
    apt-get install -y nodejs \
    npm

COPY . /app/

WORKDIR /app
RUN npm install react-native
RUN chmod -R 775 node_modules

WORKDIR /app/android
RUN chmod +x gradlew
RUN ./gradlew assembleRelease

WORKDIR /app/android/app
RUN chmod +x copy.sh
CMD /bin/bash; ./copy.sh; cd /usr/app/; ls; cd /app; npm start
