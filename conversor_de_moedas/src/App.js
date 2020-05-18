import React, { Component } from 'react';

import { View, Text, TextInput, ScrollView } from 'react-native';
import styles from './style';

import apiService from './service/Api';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      screenHeigth: 0,
      real: undefined,
      dolar: undefined,
      euro: undefined,
      libra: undefined,
      bitcoin: undefined,
      litecoin: undefined,
      taxa: {},
      currency: {
        dolar: 'USD',
        euro: 'EUR',
        libra: 'GBP',
        bitcoin: 'BTC',
        litecoin: 'LTC'
      }
    };

    this.onChangeText = this.onChangeText.bind(this);
    this.setCurrencyValue = this.setCurrencyValue.bind(this);
  }

  componentDidMount() {
    this.setCurrencyValue();
    setInterval(() => this.setCurrencyValue(), 60000);
  }

  setCurrencyValue = () => {
    apiService.getAllCurrency().then(data => {
      let keys = Object.keys(data);
      let currency = {}

      keys.forEach(elem => {
        currency[elem] = data[elem].bid;
      });

      this.setState({ taxa: currency });
    });
  }

  onContentSizeChange = (contentWidth, contentHeigth) => {
    this.setState({ screenHeigth: contentHeigth });
  }

  onChangeText = (text, field) => {
    this.state[field] = parseFloat(text);
    let prefix = this.state.currency[field];

    let data = {}

    let real = field === 'real' ? this.state[field] :
      text ? (this.state[field] * this.state.taxa[prefix]).toFixed(4) :
        undefined;

    Object.keys(this.state.currency).forEach(elem => {
      prefix = this.state.currency[elem];
      if (elem !== field) {
        data[elem] = text ? (real / this.state.taxa[prefix]).toFixed(4) : undefined;
      }
    });

    data['real'] = real;

    this.setState(data);
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        onContentSizeChange={this.onContentSizeChange}
      >
        <View style={styles.header}>
          <Text style={styles.title}>CDM</Text>
          <Text style={styles.subTitle}>Conversor de Moedas</Text>
        </View>
        <View style={[styles.radiusContainer, styles.body]}>
          <View style={styles.coin}>
            <Text style={styles.coinTitle}>Real</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.coinInput}
              value={ this.state.real ? `${this.state.real}` : undefined}
              onChangeText={(text) => this.onChangeText(text, 'real')}
            />
          </View>

          <View style={styles.coin}>
            <Text style={styles.coinTitle}>Dólar</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.coinInput}
              value={this.state.dolar ? `${this.state.dolar}` : undefined}
              onChangeText={(text) => this.onChangeText(text, 'dolar')}
            />
          </View>

          <View style={styles.coin}>
            <Text style={styles.coinTitle}>Euro</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.coinInput}
              value={this.state.euro ? `${this.state.euro}` : undefined}
              onChangeText={(text) => this.onChangeText(text, 'euro')}
            />
          </View>

          <View style={styles.coin}>
            <Text style={styles.coinTitle}>Libra</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.coinInput}
              value={this.state.libra ? `${this.state.libra}` : undefined}
              onChangeText={(text) => this.onChangeText(text, 'libra')}
            />
          </View>

          <View style={styles.coin}>
            <Text style={styles.coinTitle}>Bitcoin</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.coinInput}
              value={this.state.bitcoin ? `${this.state.bitcoin}` : undefined}
              onChangeText={(text) => this.onChangeText(text, 'bitcoin')}
            />
          </View>

          <View style={styles.coin}>
            <Text style={styles.coinTitle}>Litecoin</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.coinInput}
              value={this.state.litecoin ? `${this.state.litecoin}` : undefined}
              onChangeText={(text) => this.onChangeText(text, 'litecoin')}
            />
          </View>

          <View style={[styles.radiusContainer, styles.footer]}>
            <Text style={styles.titleInstruction}>Como funciona?</Text>
            <Text style={styles.textInstruction} >Basta apenas digitar o valor que deseja converter,
            no campo correspondente, então todas as outras serão
                    convertidas automaticamente.</Text>
            <Text style={styles.textDev}>Desenvolvido por Wellington Thalyson</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
};
