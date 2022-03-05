import React, { useState, useEffect, useCallback } from "react";
import { Linking, StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, Portal, Modal } from "react-native-paper";

import { Colors } from "../../../styles/Colors";

const styles = StyleSheet.create({
  newsComponent: {
    marginHorizontal: 20,
    padding: 8,
    backgroundColor: Colors.white,
    borderRadius: 4,
  },
  newsDisc: {
    fontSize: 14,
    color: Colors.text,
    padding: 10,
  },
  infoButton: {
    alignItems: "center",
  },
  newsLink: {
    margin: 4,
    alignSelf: "center",
  },
});

const infoDateKey = "20210401";

export const InfoModal = () => {
  const [visible, setVisible] = useState(false);

  const fetchInfoVisible = useCallback(async () => {
    // 初回のみモーダルでお知らせを表示する
    const lastInfoDate = await AsyncStorage.getItem("Info");
    if (lastInfoDate === null || lastInfoDate !== infoDateKey) {
      // setVisible(true);
      AsyncStorage.setItem("Info", infoDateKey);
    }
  }, []);

  useEffect(() => {
    fetchInfoVisible();
  }, [fetchInfoVisible]);

  const handleNewsPress = () => {
    Linking.openURL(
      "https://ja.wikipedia.org/wiki/Graphics_Interchange_Format"
    );
  };

  const showModal = () => {
    setVisible(true);
  };
  const hideModal = () => {
    setVisible(false);
  };

  return (
    <View>
      <Button onPress={showModal} style={styles.infoButton}>
        お知らせ
      </Button>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal}>
          <View style={styles.newsComponent}>
            <Text style={styles.newsDisc}>お知らせ</Text>
            <Button
              mode="contained"
              onPress={handleNewsPress}
              style={styles.newsLink}>
              詳細はこちら
            </Button>
            <Button onPress={hideModal} style={styles.infoButton}>
              閉じる
            </Button>
          </View>
        </Modal>
      </Portal>
    </View>
  );
};
