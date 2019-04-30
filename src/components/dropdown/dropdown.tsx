import { Component, Prop, State, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "my-dropdown",
  styleUrl: "dropdown.css",
  shadow: true
})

export class Dropdown {

  @Prop() listItems: any[];

  @State() toggle: boolean = false;
  @State() selectedItem: any;

  @Event() clickedItem: EventEmitter;

  handleClick = (item) => {
    this.selectedItem = item;
    this.toggle = !this.toggle;
    this.clickedItem.emit(item);
  };

  toggleList = () => {
    this.toggle = !this.toggle;
  };

  render() {
    return (
      <div class="dropdown">
        <header class="dropdown__header" onClick={this.toggleList}>
          {this.selectedItem
            ? <label>{this.selectedItem.label}</label>
            : <slot name="title">Default Header</slot>
          }
          <slot name="icon"></slot>
        </header>
        {this.toggle &&
          <ul class="dropdown__list">
            {this.listItems.map((item) => (
              <li class="dropdown__item" onClick={() => this.handleClick(item)}>{item.label}</li>
            ))}
          </ul>
        }
      </div>
    );
  }
}
