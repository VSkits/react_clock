import React from 'react';

type Props = {
  currenTimeName: string;
};
type State = {
  time: string;
};

export class Clock extends React.PureComponent<Props, State> {
  timerId = 0;

  state = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const currentTime = new Date().toUTCString().slice(-12, -4);

      this.setState({ time: currentTime });
      // eslint-disable-next-line no-console
      console.log(currentTime);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.currenTimeName !== this.props.currenTimeName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevProps.currenTimeName} to ${this.props.currenTimeName}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { currenTimeName } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{currenTimeName}</strong>

        {' time is '}

        <span className="Clock__time">{time}</span>
      </div>
    );
  }
}
