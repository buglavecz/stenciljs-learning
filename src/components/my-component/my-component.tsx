import { Component, Prop, State, Host, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @State() counter: number = 0;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <Host>


      <my-radio-group name="radio" onMyChange={ev => console.log('ev', ev)}>
        <my-radio value="1">alma</my-radio>
        <my-radio value="2">körte</my-radio>
      </my-radio-group>


       {/*  <span class="red-bg">Hello, <span id="world">World!</span></span> I'm {this.getText()}
        <br/>
        <hr/>
        Counter: <span class={{'big-text': this.counter > 3}}>{this.counter}</span>
        <br/>
        <br/>
        <button onClick={() => {this.counter++}}>add</button> */}
    </Host>;
  }
}
